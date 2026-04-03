module SpectatorSport
  class SessionWindowTag < ApplicationRecord
    belongs_to :session_window
    validates :tag, presence: true, uniqueness: { scope: :session_window_id }

    def self.migrated?
      return true if table_exists?

      Rails.logger.warn "SpectatorSport: pending migration for spectator_sport_session_window_tags table. Run: rails spectator_sport:install:migrations && rails db:migrate"
      false
    end
  end
end
