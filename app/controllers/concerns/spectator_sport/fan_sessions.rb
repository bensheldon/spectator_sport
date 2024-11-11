module SpectatorSport
  module FanSessions
    extend ActiveSupport::Concern
    before_action :store_spectator_sport_referrer_and_landing_path

    private

    def store_spectator_sport_referrer_and_landing_path
      session[:spectator_sport] ||= {}
      session[:spectator_sport][:referrer] ||= request.referrer.to_s
      session[:spectator_sport][:landing_path] ||= request.path.to_s
    end
  end
end
