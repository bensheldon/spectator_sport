module SpectatorSport
  class EventsController < ApplicationController
    skip_before_action :verify_authenticity_token

    # Cleans up untrusted client payloads before they reach the database.
    class Sanitizer
      # Matches a JSON-escaped UTF-16 surrogate that isn't part of a valid pair, e.g. from
      # JavaScript truncating a string between the two halves of an emoji.
      LONE_SURROGATE_ESCAPE = /\\u[dD][89abAB]\h{2}(?!\\u[dD][c-fC-F]\h{2})|(?<!\\u[dD][89abAB]\h{2})\\u[dD][c-fC-F]\h{2}/
      # Year 9999; well within the range Postgres timestamps can store.
      MAX_TIMESTAMP_MS = 253_402_300_799_999

      class << self
        # Returns the parsed Hash, or nil if the body isn't a usable JSON object.
        def parse_json(body)
          body = body.to_s.dup.force_encoding(Encoding::UTF_8).scrub
          parsed = begin
            JSON.parse(body)
          rescue JSON::ParserError
            # Retry with lone surrogates replaced, which the JSON parser rejects outright.
            JSON.parse(body.gsub(LONE_SURROGATE_ESCAPE, "\\ufffd")) rescue nil # rubocop:disable Style/RescueModifier
          end
          parsed.is_a?(Hash) ? parsed : nil
        end

        # Drops events that are structurally unusable rather than failing the whole batch,
        # and cleans up string content that Postgres jsonb can't store.
        def events(events)
          return [] unless events.is_a?(Array)

          events.filter_map do |event|
            event = value(event)
            next unless event.is_a?(Hash)
            next unless event["type"].to_s.match?(/\A\d+\z/)

            timestamp = Float(event["timestamp"], exception: false)
            next unless timestamp&.between?(0, MAX_TIMESTAMP_MS)

            event
          end
        end

        # Postgres jsonb can't store the NUL character (\u0000) or invalid UTF-8.
        def value(value)
          case value
          when ActionController::Parameters then value(value.to_unsafe_h)
          when Hash then value.to_h { |k, v| [ value(k), value(v) ] }
          when Array then value.map { |v| value(v) }
          when String then value.scrub.delete("\u0000")
          else value
          end
        end
      end
    end

    def index
    end

    def create
      data = if params.key?(:events) && (params.key?(:recordingId) || params.key?(:windowId))
        params.slice(:sessionId, :recordingId, :windowId, :events, :tags).to_unsafe_h
      else
        # beacon sends JSON in the request body
        Sanitizer.parse_json(request.body.read)&.slice("sessionId", "recordingId", "windowId", "events", "tags")
      end
      return head(:bad_request) unless data

      # `windowId` is the legacy name for `recordingId`; accept either for backward compatibility.
      data["recordingId"] ||= data["windowId"]
      data["windowId"] ||= data["recordingId"]
      return head(:bad_request) unless data["recordingId"].is_a?(String) && data["recordingId"].present?
      data["sessionId"] = data["recordingId"] unless data["sessionId"].is_a?(String) && data["sessionId"].present?

      events = Sanitizer.events(data["events"])

      if SpectatorSport::Recording.migrated?
        create_recording(data, events)
      else
        create_session_window(data, events)
      end

      render json: { message: "ok" }
    end

    private

    # The `spectator_sport:label` Custom event carries the signed label payload verbatim
    # (it's emitted client-side from the same signed meta tag content that used to be sent
    # separately in a `labels` array); decrypt it here so only the decoded key/value/strategy
    # ever reach the database, and so Label.record can be driven from this event below.
    def decode_label_event(event)
      signed = event.dig("data", "payload", "signed")
      label_data = begin
        signed.is_a?(String) ? Rails.application.message_verifier(:spectator_sport_label_recording).verified(signed) : nil
      rescue StandardError
        nil
      end
      decoded_payload = label_data.is_a?(Hash) ? { "key" => label_data["key"], "value" => label_data["value"], "strategy" => label_data["strategy"] } : {}

      # Rebuilt as a plain Hash (not `event.merge(...)`) so the result is a predictable Hash
      # regardless of whether `event` arrived as an ActionController::Parameters (form-encoded
      # requests) or a plain Hash (JSON body requests).
      {
        "type" => event["type"],
        "timestamp" => event["timestamp"],
        "data" => { "tag" => event.dig("data", "tag"), "payload" => decoded_payload }
      }
    end

    def create_recording(data, events)
      recording = Recording.find_or_create_by(secure_id: data["recordingId"])

      # custom_tag isn't a persisted column (yet), so it's only kept around here to find the
      # label events below, not written to the database.
      decoded_events = events.map do |event|
        event_type = Event::EVENT_TYPES[event["type"].to_s]
        custom_tag = event_type == "Custom" ? event.dig("data", "tag") : nil
        event = decode_label_event(event) if custom_tag == CustomEvents::LABEL
        { event: event, event_type: event_type, custom_tag: custom_tag }
      end

      records_data = decoded_events.map do |decoded|
        event = decoded[:event]
        event_type = decoded[:event_type]
        {
          recording_id: recording.id,
          event_data: event,
          event_type: event_type,
          event_source: event_type == "IncrementalSnapshot" ? Event::EVENT_SOURCES[event.dig("data", "source").to_s] : nil,
          created_at: Time.at(event["timestamp"].to_f / 1000.0)
        }
      end
      Event.insert_all(records_data) if records_data.any?

      last_event = records_data.max_by { |record| record[:created_at] }
      recording.update(updated_at: last_event[:created_at]) if last_event

      if SpectatorSport::Label.migrated?
        decoded_events.select { |decoded| decoded[:custom_tag] == CustomEvents::LABEL }.first(20).each do |decoded|
          payload = decoded[:event].dig("data", "payload")
          next unless payload.is_a?(Hash) && payload["value"]
          Label.record(
            recording: recording,
            value: payload["value"],
            key: payload["key"],
            strategy: payload["strategy"]
          )
        rescue StandardError
          nil
        end
      end
    end

    def create_session_window(data, events)
      session = Session.find_or_create_by(secure_id: data["sessionId"])
      window = SessionWindow.find_or_create_by(secure_id: data["windowId"], session: session)

      records_data = events.map do |event|
        { session_id: session.id, session_window_id: window.id, event_data: event, created_at: Time.at(event["timestamp"].to_f / 1000.0) }
      end.to_a
      Event.insert_all(records_data) if records_data.any?

      last_event = records_data.max_by { |data| data[:created_at] }
      window.update(updated_at: last_event[:created_at]) if last_event

      if SpectatorSport::SessionWindowTag.migrated?
        verifier = Rails.application.message_verifier(:spectator_sport_tag_recording)
        Array(data["tags"]).first(20).each do |signed_tag|
          tag_value = verifier.verified(signed_tag)
          next unless tag_value.is_a?(String) && tag_value.present?
          SessionWindowTag.find_or_create_by(session_window: window, tag: tag_value)
        rescue ActiveRecord::RecordNotUnique
          nil
        end
      end
    end
  end
end
