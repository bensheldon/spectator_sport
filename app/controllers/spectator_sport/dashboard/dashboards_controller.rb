module SpectatorSport
  module Dashboard
    class DashboardsController < ApplicationController
      def index
        @session_windows = SessionWindow.order(:created_at).limit(50).reverse_order
      end
    end
  end
end
