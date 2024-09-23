module SpectatorSport
  class EventsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
      data = if params.key?(:pageId) && params.key?(:events)
               params.slice(:pageId, :events).stringify_keys
             else
               # beacon sends JSON in the request body
               JSON.parse(request.body.read).slice("pageId", "events")
             end

      page_id = data["pageId"]
      events = data["events"]

      records_data = events.map do |event|
        { page_id: page_id, event_data: event, created_at: Time.at(event["timestamp"] / 1000.0) }
      end.to_a

      Event.insert_all(records_data)

      render json: { message: "ok" }
    end
  end
end
