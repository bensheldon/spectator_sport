module SpectatorSport
  class Recording < ApplicationRecord
    has_many :events, dependent: :delete_all
    has_many :labels, class_name: "SpectatorSport::Label", dependent: :delete_all

    def self.migrated?
      return true if table_exists?

      Rails.logger.warn "SpectatorSport: pending migration for spectator_sport_recordings table. Run: rails spectator_sport:install:migrations && rails db:migrate"
      false
    end

    def analysis
      @analysis ||= RecordingAnalysis.new(self)
    end
  end
end
