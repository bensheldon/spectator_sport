module SpectatorSport
  class SessionWindow < ApplicationRecord
    belongs_to :session
    has_many :events, dependent: :delete_all
    has_many :session_window_tags, dependent: :delete_all
    has_many :labels, class_name: "SpectatorSport::Label", dependent: :delete_all

    def analysis
      @analysis ||= SessionWindowAnalysis.new(self)
    end
  end
end
