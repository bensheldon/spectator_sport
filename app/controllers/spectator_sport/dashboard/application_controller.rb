module SpectatorSport
  module Dashboard
    class ApplicationController < ActionController::Base
    end
  end
end

ActiveSupport.run_load_hooks(:spectator_sport_dashboard_application_controller, SpectatorSport::Dashboard::ApplicationController)
