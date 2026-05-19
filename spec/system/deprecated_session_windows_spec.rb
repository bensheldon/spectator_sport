# frozen_string_literal: true

require "rails_helper"

RSpec.describe "Session windows (deprecated)", type: :system, js: true do
  it "renders the session windows index" do
    visit "/spectator_sport_dashboard/session_windows"

    expect(page).to have_text("Spectator Sport")
    expect(page).to have_text("Windows (deprecated)")
  end
end
