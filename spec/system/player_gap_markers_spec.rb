# frozen_string_literal: true

require "rails_helper"

RSpec.describe "Player gap markers", type: :system, js: true do
  it "marks the timeline where sequence numbers show events are missing" do
    recording = SpectatorSport::Recording.create!(secure_id: "test-recording")
    base_time = 1_000_000_000_000 # ms epoch

    [
      { type: 4, data: { href: "http://example.com", width: 1024, height: 768 }, timestamp: base_time, spectatorSportSeq: 1 },
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
        timestamp: base_time,
        spectatorSportSeq: 2
      },
      { type: 3, data: { source: 0, texts: [], attributes: [], removes: [], adds: [] }, timestamp: base_time + 5_000, spectatorSportSeq: 3 },
      { type: 3, data: { source: 0, texts: [], attributes: [], removes: [], adds: [] }, timestamp: base_time + 10_000, spectatorSportSeq: 7 }
    ].each do |event_data|
      SpectatorSport::Event.create!(recording: recording, event_data: event_data, created_at: Time.at(event_data[:timestamp] / 1000.0))
    end

    visit spectator_sport_dashboard.recording_path(recording)

    # Uses evaluate_script (no cached node reference) to avoid Ferrum::NodeNotFoundError
    # from rrweb's rapid DOM mutations invalidating Capybara's node handles.
    marker_count = page.document.synchronize(Capybara.default_max_wait_time) do
      count = page.evaluate_script(%(document.querySelectorAll('.rr-progress div[title="spectator_sport:gap"]').length))
      raise Capybara::ElementNotFound, "no gap marker yet" if count.zero?
      count
    end

    expect(marker_count).to eq 1
  end
end
