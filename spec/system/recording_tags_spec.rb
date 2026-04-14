# frozen_string_literal: true

require "rails_helper"

RSpec.describe "Recording tags", type: :system, js: true do
  it "stores a tag from the page and shows it in the dashboard" do
    visit "/examples"
    expect(page).to have_text("Your browser activity is being recorded.")
    wait_for_recording

    visit "/spectator_sport_dashboard"
    expect(page).to have_text("user-27")

    first(:link, "user-27").click
    expect(page).to have_text("Recordings tagged: user-27")
    expect(page).to have_css("table")
  end
end
