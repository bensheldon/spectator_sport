module SpectatorSport
  class EventsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
    end

    def create
      data = if params.key?(:events) && (params.key?(:recordingId) || params.key?(:windowId))
        params.slice(:sessionId, :recordingId, :windowId, :events, :tags).stringify_keys
      else
        # beacon sends JSON in the request body
        JSON.parse(request.body.read).slice("sessionId", "recordingId", "windowId", "events", "tags")
      end

      # `windowId` is the legacy name for `recordingId`; accept either for backward compatibility.
      data["recordingId"] ||= data["windowId"]
      data["windowId"] ||= data["recordingId"]

      events = data["events"]

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
