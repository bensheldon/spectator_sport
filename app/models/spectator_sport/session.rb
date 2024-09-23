module SpectatorSport
  class Session < ApplicationRecord
    has_many :session_windows
    has_many :events
  end
end
