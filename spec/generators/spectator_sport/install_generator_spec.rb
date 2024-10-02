# frozen_string_literal: true

require 'rails_helper'
# require 'generators/spectator_sport/install_generator'

describe "install generator", type: :generator do
  around do |example|
    quiet { setup_example_app }
    example.run
    teardown_example_app
  end

  it 'creates a migration for spectator_sport_events table', skip: true do
    quiet do
      binding.irb
      run_in_example_app 'rails g spectator_sport:install:migrations'
    end

    expect(Dir.glob("#{example_app_path}/db/migrate/[0-9]*_create_spectator_sport_events.rb")).not_to be_empty
  end
end
