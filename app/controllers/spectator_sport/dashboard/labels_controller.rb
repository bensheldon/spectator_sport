module SpectatorSport
  module Dashboard
    class LabelsController < ApplicationController
      def tags
        @value = params[:value]
        @session_windows = session_windows_scope(key: nil, value: @value)
      end

      def key_index
        @key = params[:key]
        @session_windows = session_windows_scope(key: @key)
      end

      def show
        @key = params[:key]
        @value = params[:value]
        @session_windows = session_windows_scope(key: @key, value: @value)
      end

      private

      def session_windows_scope(key:, value: SpectatorSport::NONE)
        label_conditions = { key: key }
        label_conditions[:value] = value unless value == SpectatorSport::NONE

        SessionWindow
          .where(id: SessionWindow.joins(:labels).where(spectator_sport_labels: label_conditions).select(:id))
          .includes(:session_window_tags, :labels)
          .distinct
          .order(updated_at: :desc)
          .limit(50)
      end
    end
  end
end
