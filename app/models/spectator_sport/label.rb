module SpectatorSport
  class Label < ApplicationRecord
    self.table_name = "spectator_sport_labels"

    belongs_to :session_window
    validates :value, presence: true

    def self.migrated?
      return true if table_exists?

      Rails.logger.warn "SpectatorSport: pending migration for spectator_sport_labels table. Run: rails spectator_sport:install:migrations && rails db:migrate"
      false
    end

    def self.record(session_window:, value:, key: nil, strategy: "many")
      value = value.to_s.presence
      key = key.to_s.presence
      strategy = key ? strategy.to_s : "many"
      return unless value

      case strategy
      when "first"
        mysql_lock(session_window) do
          find_or_create_by(session_window: session_window, key: key) do |l|
            l.value = value
            l.multiple = false
          end
        end
      when "one"
        mysql_lock(session_window) do
          label = find_or_initialize_by(session_window: session_window, key: key)
          label.assign_attributes(value: value, multiple: false)
          label.save
        end
      else # "many"
        find_or_create_by(session_window: session_window, key: key, value: value) do |l|
          l.multiple = true
        end
      end
    end

    def self.mysql_lock(session_window, &block)
      if connection.adapter_name =~ /mysql/i
        session_window.with_lock(&block)
      else
        block.call
      end
    end

    def display
      key.present? ? "#{key}: #{value}" : value
    end
  end
end
