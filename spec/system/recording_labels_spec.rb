# frozen_string_literal: true

require "rails_helper"

RSpec.describe "Recording labels", type: :system, js: true do
  it "stores a keyed label from the page and shows it in the dashboard" do
    visit "/examples"
    expect(page).to have_text("Your browser activity is being recorded.")

    visit "/spectator_sport_dashboard"
    expect(page).to have_text("user_id: 27")

    first(:link, "user_id: 27").click
    expect(page).to have_text("Recordings labeled: user_id: 27")
    expect(page).to have_css("table")
  end

  it "key link from dashboard navigates to key view showing all recordings with that key" do
    visit "/examples"
    expect(page).to have_text("Your browser activity is being recorded.")

    visit "/spectator_sport_dashboard"
    expect(page).to have_text("user_id")

    first(:link, "user_id").click
    expect(page).to have_text("Recordings with label key: user_id")
    expect(page).to have_css("table")
  end

  it "key/value view links back to key view" do
    visit "/examples"
    expect(page).to have_text("Your browser activity is being recorded.")

    visit "/spectator_sport_dashboard"
    expect(page).to have_text("user_id: 27")

    first(:link, "user_id: 27").click
    expect(page).to have_text("Recordings labeled: user_id: 27")
    click_link "See all recordings with key: user_id"
    expect(page).to have_text("Recordings with label key: user_id")
  end

  it "stores a keyless label from the page and shows it in the dashboard" do
    visit "/examples"
    expect(page).to have_text("Your browser activity is being recorded.")

    visit "/spectator_sport_dashboard"
    expect(page).to have_text("vip")

    first(:link, "vip").click
    expect(page).to have_text("Recordings labeled: vip")
    expect(page).to have_css("table")
  end

  it "strategy: :many stores multiple values for the same key" do
    visit "/examples"
    expect(page).to have_text("Your browser activity is being recorded.")

    expect(SpectatorSport::Label.where(key: "role", value: "admin")).to exist
    expect(SpectatorSport::Label.where(key: "role", value: "moderator")).to exist
    session_window = SpectatorSport::Label.where(key: "role", value: "admin").last.session_window
    expect(session_window.labels.where(key: "role").count).to eq(2)
  end

  it "strategy: :one replaces the value when a new value is sent" do
    visit "/examples"
    expect(page).to have_text("Your browser activity is being recorded.")

    visit "/examples/new"
    expect(page).to have_text("Submit")

    session_window = SpectatorSport::Label.where(key: "user_id", value: "28").last.session_window
    expect(session_window.labels.where(key: "user_id").count).to eq(1)
    expect(session_window.labels.where(key: "user_id", value: "27")).not_to exist
  end

  it "strategy: :first ignores subsequent values for the same key" do
    visit "/examples"
    expect(page).to have_text("Your browser activity is being recorded.")

    visit "/examples/new"
    expect(page).to have_text("Submit")

    session_window = SpectatorSport::Label.where(key: "first_page", value: "index").last.session_window
    expect(session_window.labels.where(key: "first_page").count).to eq(1)
    expect(session_window.labels.where(key: "first_page", value: "index")).to exist
    expect(session_window.labels.where(key: "first_page", value: "new")).not_to exist
  end
end
