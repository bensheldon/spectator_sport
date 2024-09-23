module SpectatorSport
  class DashboardsController < ApplicationController
    def index
      page_id = Event.last&.page_id
      @events = Event.where(page_id: page_id).order(:created_at)
    end
  end
end
