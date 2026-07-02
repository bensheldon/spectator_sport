# frozen_string_literal: true

require "rails_helper"

RSpec.describe "Recording labels", type: :system, js: true do
  it "stores a keyed label from the page and shows it in the dashboard" do
    visit "/examples"
    expect(page).to have_text("Your browser activity is being recorded.")
    wait_for_recording

    visit "/spectator_sport_dashboard"
    expect(page).to have_text("user_id: 27")

    first(:link, "user_id: 27").click
    expect(page).to have_field("query", with: "label:user_id:27")
    expect(page).to have_css("table")
  end

  it "displays keyed labels as a single combined 'key: value' link in the dashboard" do
    visit "/examples"
    expect(page).to have_text("Your browser activity is being recorded.")
    wait_for_recording

    visit "/spectator_sport_dashboard"
    expect(page).to have_link("user_id: 27")
    expect(page).not_to have_link("user_id", exact: true)

    first(:link, "user_id: 27").click
    expect(page).to have_field("query", with: "label:user_id:27")
    expect(page).to have_css("table")
  end

  it "recording permalink page's label value link filters by key:value" do
    visit "/examples"
    expect(page).to have_text("Your browser activity is being recorded.")
    wait_for_recording

    visit "/spectator_sport_dashboard"
    click_link "Recording", match: :first

    within(".card", text: "Labels") do
      click_link "27"
    end
    expect(page).to have_field("query", with: "label:user_id:27")
  end

  it "recording permalink page's label key link filters by key" do
    visit "/examples"
    expect(page).to have_text("Your browser activity is being recorded.")
    wait_for_recording

    visit "/spectator_sport_dashboard"
    click_link "Recording", match: :first

    within(".card", text: "Labels") do
      click_link "user_id"
    end
    expect(page).to have_field("query", with: "label:user_id:*")
  end

  it "stores a keyless label from the page and shows it in the dashboard" do
    visit "/examples"
    expect(page).to have_text("Your browser activity is being recorded.")
    wait_for_recording

    visit "/spectator_sport_dashboard"
    expect(page).to have_text("vip")

    first(:link, "vip").click
    expect(page).to have_field("query", with: "label:vip")
    expect(page).to have_css("table")
  end

  it "strategy: :many stores multiple values for the same key" do
    visit "/examples"
    expect(page).to have_text("Your browser activity is being recorded.")
    wait_for_recording

    expect(SpectatorSport::Label.where(key: "role", value: "admin")).to exist
    expect(SpectatorSport::Label.where(key: "role", value: "moderator")).to exist
    recording = SpectatorSport::Label.where(key: "role", value: "admin").last.recording
    expect(recording.labels.where(key: "role").count).to eq(2)
  end

  it "strategy: :one replaces the value when a new value is sent" do
    visit "/examples"
    expect(page).to have_text("Your browser activity is being recorded.")
    wait_for_recording

    visit "/examples/new"
    expect(page).to have_button("Submit")
    wait_for_recording

    recording = SpectatorSport::Label.where(key: "user_id", value: "28").last.recording
    expect(recording.labels.where(key: "user_id").count).to eq(1)
    expect(recording.labels.where(key: "user_id", value: "27")).not_to exist
  end

  it "strategy: :first ignores subsequent values for the same key" do
    visit "/examples"
    expect(page).to have_text("Your browser activity is being recorded.")
    wait_for_recording

    visit "/examples/new"
    expect(page).to have_button("Submit")
    wait_for_recording

    recording = SpectatorSport::Label.where(key: "first_page", value: "index").last.recording
    expect(recording.labels.where(key: "first_page").count).to eq(1)
    expect(recording.labels.where(key: "first_page", value: "index")).to exist
    expect(recording.labels.where(key: "first_page", value: "new")).not_to exist
  end
end
