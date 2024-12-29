module SpectatorSport
  class SessionWindow < ApplicationRecord
    belongs_to :session
    has_many :events

    def analysis
      @analysis ||= SessionWindowAnalysis.new(self)
    end
  end
end
