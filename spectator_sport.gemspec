require_relative "lib/spectator_sport/version"

Gem::Specification.new do |spec|
  spec.name        = "spectator_sport"
  spec.version     = SpectatorSport::VERSION
  spec.summary     = "Summary of SpectatorSport."
  spec.description = "Description of SpectatorSport."

  spec.license     = "MIT"
  spec.authors     = [ "Ben Sheldon" ]
  spec.email       = [ "bensheldon@gmail.com" ]
  spec.homepage    = "https://github.com/bensheldon/spectator_sport"
  spec.metadata    = {
    "homepage_uri" => spec.homepage,
    "source_code_uri" => "https://github.com/bensheldon/spectator_sport",
    "changelog_uri" => "https://github.com/bensheldon/spectator_sport/releases"
  }

  spec.files = Dir[
    "app/**/*",
    "config/**/*",
    "lib/**/*",
    "README.md",
    "LICENSE.txt",
  ]

  spec.add_dependency "rails", ">= 7.0.0"
end
