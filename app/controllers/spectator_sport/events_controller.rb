module SpectatorSport
  class EventsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
    end

    def create
      data = if params.key?(:sessionId)&& params.key?(:windowId) && params.key?(:events)
               params.slice(:sessionId, :windowId, :events).stringify_keys
      else
               # beacon sends JSON in the request body
               JSON.parse(request.body.read).slice("sessionId", "windowId", "events")
      end

      session_secure_id = data["sessionId"]
      window_secure_id = data["windowId"]
      events = data["events"]

      spectator_session_params = {
        remote_ip: request.remote_ip,
        user_agent: request.user_agent,
        referrer: session.dig(:spectator_sport, :referrer),
        landing_path: session.dig(:spectator_sport, :landing_path)
      }

      session = Session.create_with(
        spectator_session_params
      ).find_or_create_by(
        secure_id: session_secure_id
      )
      window = SessionWindow.find_or_create_by(secure_id: window_secure_id, session: session)

      records_data = events.map do |event|
        { session_id: session.id, session_window_id: window.id, event_data: event, created_at: Time.at(event["timestamp"].to_f / 1000.0) }
      end.to_a
      Event.insert_all(records_data)

      last_event = records_data.max_by { |data| data[:created_at] }
      window.update(updated_at: last_event[:created_at]) if last_event

      render json: { message: "ok" }
    end
  end
end
