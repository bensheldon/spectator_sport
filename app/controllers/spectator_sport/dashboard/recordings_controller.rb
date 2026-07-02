module SpectatorSport
  module Dashboard
    class RecordingsController < ApplicationController
      def index
        @search_query = SpectatorSport::SearchQuery.new(query: params[:query])

        @recordings = Recording.order(:created_at).limit(50).reverse_order
        @recordings = @recordings.includes(:labels) if SpectatorSport::Label.migrated?

        if @search_query.query.present? && SpectatorSport::Label.migrated?
          if @search_query.valid?
            @recordings = @search_query.to_scope(base_scope: @recordings)
          else
            @recordings = @recordings.none
          end
        end
      end

      def show
        @recording = Recording.find(params[:id])
        @events = @recording.events.page_after(nil)
        @labels = SpectatorSport::Label.migrated? ? @recording.labels.to_a : []
      end

      def stream_events
        response.content_type = "text/vnd.turbo-stream.html"
        return head(:ok) if params[:after_event_id].blank?

        recording = Recording.find(params[:id])
        previous_event = recording.events.find_by(id: params[:after_event_id])
        @events = recording.events.page_after(previous_event)

        render layout: false
      end

      def details
        @recording = Recording.find(params[:id])
      end

      def destroy
        @recording = Recording.find(params[:id])
        @recording.events.delete_all
        @recording.labels.delete_all if SpectatorSport::Label.migrated?
        @recording.delete

        redirect_to root_path
      end
    end
  end
end
