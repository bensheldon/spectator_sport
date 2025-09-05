module SpectatorSport
  module Dashboard
    class SessionWindowsController < ApplicationController
      def show
        @session_window = SessionWindow.find(params[:id])
        @events = @session_window.events.page_after(nil)
      end

      def events
        response.content_type = "text/vnd.turbo-stream.html"
        return head(:ok) if params[:after_event_id].blank?

        session_window = SessionWindow.find(params[:id])
        previous_event = session_window.events.find_by(id: params[:after_event_id])
        @events = session_window.events.page_after(previous_event)

        render layout: false
      end

      def destroy
        @session_window = SessionWindow.find(params[:id])
        @session_window.events.delete_all
        @session_window.delete

        redirect_to root_path
      end
    end
  end
end
