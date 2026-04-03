module SpectatorSport
  class SessionWindow < ApplicationRecord
    belongs_to :session
    has_many :events
    has_many :session_window_tags

    def analysis
      @analysis ||= SessionWindowAnalysis.new(self)
    end
  end
end
