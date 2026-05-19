require "spectator_sport/version"
require "spectator_sport/engine"

module SpectatorSport
  NONE = Object.new.freeze

  def self.deprecator
    @deprecator ||= ActiveSupport::Deprecation.new("1.0", "spectator_sport")
  end
end
