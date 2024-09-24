module SpectatorSport
  module Dashboard
    class DashboardsController < ApplicationController
      def index
        @session_windows = SessionWindow.order(:created_at).limit(50).reverse_order
      end

      def show
        @session_window = SessionWindow.find(params[:id])
      end

      def destroy
        @session_window = SessionWindow.find(params[:id])
        @session_window.events.delete_all
        @session_window.delete
        redirect_to action: :index
      end
    end
  end
end
