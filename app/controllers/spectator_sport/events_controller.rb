module SpectatorSport
  class EventsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
    end

    def create
      data = if params.key?(:sessionId) && params.key?(:windowId) && params.key?(:events)
        params.slice(:sessionId, :windowId, :events, :tags, :labels).stringify_keys
      else
        # beacon sends JSON in the request body
        JSON.parse(request.body.read).slice("sessionId", "windowId", "events", "tags", "labels")
      end

      session_secure_id = data["sessionId"]
      window_secure_id = data["windowId"]
      events = data["events"]

      session = Session.find_or_create_by(secure_id: session_secure_id)
      window = SessionWindow.find_or_create_by(secure_id: window_secure_id, session: session)

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

      if SpectatorSport::Label.migrated?
        verifier = Rails.application.message_verifier(:spectator_sport_label_recording)
        Array(data["labels"]).first(20).each do |signed_label|
          label_data = verifier.verified(signed_label)
          next unless label_data.is_a?(Hash)
          Label.record(
            session_window: window,
            value: label_data["value"],
            key: label_data["key"],
            strategy: label_data["strategy"]
          )
        rescue StandardError
          nil
        end
      end

      render json: { message: "ok" }
    end
  end
end
