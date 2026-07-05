# frozen_string_literal: true

module SpectatorSport
  module RecordingContext
    extend ActiveSupport::Concern

    included do
      helper_method :spectator_sport_window_id
    end

    WINDOW_ID_FORMAT = /\A[a-z0-9]{40}\z/

    def spectator_sport_window_id
      @spectator_sport_window_id ||= sanitize_window_id(
        request.headers["X-Spectator-Sport-Window-Id"].presence ||
        cookies[:spectator_sport_window_id].presence
      )
    end

    private

    def sanitize_window_id(value)
      value if value&.match?(WINDOW_ID_FORMAT)
    end
  end
end
