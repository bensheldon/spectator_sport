module SpectatorSport
  module Dashboard
    class DashboardsController < ApplicationController
      def index
        @session_windows = SessionWindow.order(:created_at).limit(50).reverse_order
        @session_windows = @session_windows.includes(:session_window_tags) if SpectatorSport::SessionWindowTag.migrated?
      end
    end
  end
end
