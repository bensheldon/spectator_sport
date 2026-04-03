# frozen_string_literal: true

require "rails_helper"

RSpec.describe "Stop recording", type: :system, js: true do
  it "does not record when stop recording tag is present" do
    expect {
      visit "/examples/stopped"
      visit "/spectator_sport_dashboard"
    }.not_to change { SpectatorSport::SessionWindow.count }
  end

  it "resumes recording after navigating away from a stopped page" do
    visit "/examples/stopped"
    visit "/examples"

    # Navigate away to trigger pagehide, which flushes events
    visit "/spectator_sport_dashboard"

    page.document.synchronize(Capybara.default_max_wait_time) do
      raise Capybara::ElementNotFound, "session window not stored yet" unless SpectatorSport::SessionWindow.exists?
    end

    expect(SpectatorSport::SessionWindow.count).to be > 0
  end
end
