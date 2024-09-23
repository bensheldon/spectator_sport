module SpectatorSport
  class Event < ApplicationRecord
    belongs_to :session
    belongs_to :session_window
  end
end
