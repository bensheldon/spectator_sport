# frozen_string_literal: true

require "rails_helper"

RSpec.describe "Recording tags", type: :system, js: true do
  it "stores a tag from the page and shows it in the dashboard" do
    visit "/examples"

    # Wait for JS to detect the meta tag and POST it to the events API
    page.document.synchronize(Capybara.default_max_wait_time) do
      raise Capybara::ElementNotFound, "tag not stored yet" unless SpectatorSport::SessionWindowTag.where(tag: "user-27").exists?
    end

    visit "/spectator_sport_dashboard"
    expect(page).to have_text("user-27")

    first(:link, "user-27").click
    expect(page).to have_text("Recordings tagged: user-27")
    expect(page).to have_css("table")
  end
end
