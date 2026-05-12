module SpectatorSport
  module Dashboard
    class TagsController < ApplicationController
      def show
        @tag = params[:name]
        scope = SessionWindow
          .joins(:session_window_tags)
          .where(spectator_sport_session_window_tags: { tag: @tag })
          .distinct
          .order(updated_at: :desc)
          .limit(50)
        scope = scope.includes(:session_window_tags) if SpectatorSport::SessionWindowTag.migrated?
        scope = scope.includes(:labels) if SpectatorSport::Label.migrated?
        @session_windows = scope
      end
    end
  end
end
