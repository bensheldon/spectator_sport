# frozen_string_literal: true

require "rails_helper"

describe SpectatorSport::Event do
  # The test database isn't reset between examples, so every recording is
  # namespaced to this spec to avoid colliding with events created elsewhere.
  def create_event(secure_id, event_type:, event_data:, event_source: nil)
    recording = SpectatorSport::Recording.create!(secure_id: "event-spec-#{secure_id}")
    described_class.create!(
      recording: recording,
      event_data: event_data,
      event_type: event_type,
      event_source: event_source
    )
  end

  describe "#label?, #label_key, #label_value" do
    it "decodes the key/value payload of a label Custom event" do
      event = create_event(
        "label",
        event_type: "Custom",
        event_data: { "type" => 5, "data" => { "tag" => "spectator_sport:label", "payload" => { "key" => "user_id", "value" => "27" } } }
      )

      expect(event.label?).to eq(true)
      expect(event.label_key).to eq("user_id")
      expect(event.label_value).to eq("27")
      expect(event.history?).to eq(false)
      expect(event.lifecycle?).to eq(false)
    end
  end

  describe "#history?, #history_href" do
    it "decodes the href payload of a history Custom event" do
      event = create_event(
        "history",
        event_type: "Custom",
        event_data: { "type" => 5, "data" => { "tag" => "spectator_sport:history", "payload" => { "href" => "http://127.0.0.1:3000/next" } } }
      )

      expect(event.history?).to eq(true)
      expect(event.history_href).to eq("http://127.0.0.1:3000/next")
      expect(event.label?).to eq(false)
    end
  end

  describe "#lifecycle?, #lifecycle_reason" do
    it "decodes the reason payload of a lifecycle Custom event" do
      event = create_event(
        "lifecycle",
        event_type: "Custom",
        event_data: { "type" => 5, "data" => { "tag" => "spectator_sport:lifecycle", "payload" => { "reason" => "bfcache-restore" } } }
      )

      expect(event.lifecycle?).to eq(true)
      expect(event.lifecycle_reason).to eq("bfcache-restore")
    end
  end

  describe "#title and #explanation" do
    it "uses the persisted event_type/event_source columns" do
      event = create_event(
        "mouse-click",
        event_type: "IncrementalSnapshot",
        event_source: "MouseInteraction",
        event_data: { "type" => 3, "data" => { "source" => 2, "type" => 2 } }
      )

      expect(event.title).to eq("Mouse Click")
      expect(event.explanation.title).to eq("Mouse Click")
      expect(event.explanation.details).to include("source: MouseInteraction", "Click")
    end

    it "reports the href from event_data for a Meta event" do
      event = create_event(
        "meta",
        event_type: "Meta",
        event_data: { "type" => 4, "data" => { "href" => "http://127.0.0.1:3000/" } }
      )

      expect(event.explanation.details).to include("visited http://127.0.0.1:3000/")
    end
  end
end
