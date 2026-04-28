# frozen_string_literal: true

require "rails_helper"

RSpec.describe "Recording context", type: :system, js: true do
  it "sets the window ID cookie and reflects it back server-side" do
    visit "/examples"

    window_id = evaluate_script("window.SpectatorSport.context.windowId")
    expect(window_id).to match(/\A[a-z0-9]{40}\z/)

    visit "/examples/recording_context"
    expect(page).to have_css("#recording-window-id", text: window_id)
  end
end
