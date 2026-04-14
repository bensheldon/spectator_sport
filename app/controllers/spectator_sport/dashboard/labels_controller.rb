module SpectatorSport
  module Dashboard
    class LabelsController < ApplicationController
      def tags
        @value = params[:value]
        @session_windows = session_windows_scope
          .where(spectator_sport_labels: { key: nil, value: @value })
      end

      def key_index
        @key = params[:key]
        @session_windows = session_windows_scope
          .where(spectator_sport_labels: { key: @key })
      end

      def show
        @key = params[:key]
        @value = params[:value]
        @session_windows = session_windows_scope
          .where(spectator_sport_labels: { key: @key, value: @value })
      end

      private

      def session_windows_scope
        scope = SessionWindow
          .joins(:labels)
          .distinct
          .order(updated_at: :desc)
          .limit(50)
        scope = scope.includes(:session_window_tags) if SpectatorSport::SessionWindowTag.migrated?
        scope = scope.includes(:labels) if SpectatorSport::Label.migrated?
        scope
      end
    end
  end
end
