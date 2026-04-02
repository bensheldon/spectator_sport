# frozen_string_literal: true

require "rails_helper"

RSpec.describe "Dashboard", type: :system do
  it "shows the dashboard" do
    visit "/spectator_sport_dashboard"

    expect(page).to have_text("Spectator Sport")
  end
end
