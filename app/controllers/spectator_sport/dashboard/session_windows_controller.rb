module SpectatorSport
  module Dashboard
    class SessionWindowsController < ApplicationController
      def show
        @session_window = SessionWindow.find(params[:id])
      end

      def destroy
        @session_window = SessionWindow.find(params[:id])
        @session_window.events.delete_all
        @session_window.delete

        redirect_to "/spectator_sport_dashboard"
      end
    end
  end
end