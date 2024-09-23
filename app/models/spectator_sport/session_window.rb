module SpectatorSport
  class SessionWindow < ApplicationRecord
    belongs_to :session
    has_many :events
  end
end
