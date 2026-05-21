module SpectatorSport
  module Dashboard
    class LabelsController < ApplicationController
      def tags
        @value = params[:value]
        @recordings = recordings_scope(key: nil, value: @value)
      end

      def key_index
        @key = params[:key]
        @recordings = recordings_scope(key: @key)
      end

      def show
        @key = params[:key]
        @value = params[:value]
        @recordings = recordings_scope(key: @key, value: @value)
      end

      private

      def recordings_scope(key:, value: SpectatorSport::NONE)
        label_conditions = { key: key }
        label_conditions[:value] = value unless value == SpectatorSport::NONE

        Recording
          .where(id: Recording.joins(:labels).where(spectator_sport_labels: label_conditions).select(:id))
          .includes(:labels)
          .distinct
          .order(updated_at: :desc)
          .limit(50)
      end
    end
  end
end
