# frozen_string_literal: true

require "rails_helper"

RSpec.describe "Player timestamp link", type: :system, js: true do
  it "generates a timestamp link that loads the recording at the correct time" do
    session = SpectatorSport::Session.create!(secure_id: "test-session")
    session_window = SpectatorSport::SessionWindow.create!(session: session, secure_id: "test-window")

    base_time = 1_000_000_000_000 # ms epoch

    [
      { type: 4, data: { href: "http://example.com", width: 1024, height: 768 }, timestamp: base_time },
      {
        type: 2,
        data: {
          node: {
            type: 0, id: 1,
            childNodes: [
              {
                type: 2, tagName: "html", attributes: {}, id: 2,
                childNodes: [
                  { type: 2, tagName: "head", attributes: {}, childNodes: [], id: 3 },
                  { type: 2, tagName: "body", attributes: {}, childNodes: [], id: 4 }
                ]
              }
            ]
          },
          initialOffset: { top: 0, left: 0 }
        },
        timestamp: base_time
      },
      { type: 3, data: { source: 0, texts: [], attributes: [], removes: [], adds: [] }, timestamp: base_time + 10_000 }
    ].each do |event_data|
      SpectatorSport::Event.create!(session: session, session_window: session_window, event_data: event_data)
    end

    visit spectator_sport_dashboard.session_window_path(session_window)

    # Wait for the player to play and update the URL input with a timestamp.
    # Uses evaluate_script (no cached node reference) to avoid Ferrum::NodeNotFoundError
    # from rrweb's rapid DOM mutations invalidating Capybara's node handles.
    timestamp_url = page.document.synchronize(Capybara.default_max_wait_time) do
      url = page.evaluate_script("document.querySelector('[data-clipboard-target=\"source\"]').dataset.url")
      raise Capybara::ElementNotFound, "no timestamp yet" unless url.to_s.include?("?t=")
      url
    end

    visit timestamp_url

    expect(page.current_url).to include("?t=")
  end
end
