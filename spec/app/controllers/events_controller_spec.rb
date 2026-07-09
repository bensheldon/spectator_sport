# frozen_string_literal: true

require 'rails_helper'

describe SpectatorSport::EventsController, type: :controller do
  render_views

  before do
    @routes = SpectatorSport::Engine.routes
  end

  describe 'POST #create' do
    it 'stores events from rrweb' do
      payload = {
        "sessionId": "fb1x1aji7p5nljgnydya9kid7vncrzw48ir7d70h",
        "recordingId": "873h0zhhw66i9f1t36rh5myu8pzwopt676v9s83z",
        "events": [
          { "type": 4, "data": { "href": "http://127.0.0.1:3000/", "width": 1512, "height": 770 }, "timestamp": 1727655888530 }
        ]
      }

      post :create, params: payload

      expect(SpectatorSport::Event.last).to have_attributes(
        recording: SpectatorSport::Recording.find_by(secure_id: payload[:recordingId])
      )
    end

    it 'accepts the legacy windowId parameter as an alias for recordingId' do
      payload = {
        "sessionId": "fb1x1aji7p5nljgnydya9kid7vncrzw48ir7d70h",
        "windowId": "873h0zhhw66i9f1t36rh5myu8pzwopt676v9s83z",
        "events": [
          { "type": 4, "data": { "href": "http://127.0.0.1:3000/", "width": 1512, "height": 770 }, "timestamp": 1727655888530 }
        ]
      }

      post :create, params: payload

      expect(SpectatorSport::Event.last).to have_attributes(
        recording: SpectatorSport::Recording.find_by(secure_id: payload[:windowId])
      )
    end

    it 'decodes event_type and event_source for a Meta event' do
      payload = {
        "sessionId": "fb1x1aji7p5nljgnydya9kid7vncrzw48ir7d70h",
        "recordingId": "873h0zhhw66i9f1t36rh5myu8pzwopt676v9s83z",
        "events": [
          { "type": 4, "data": { "href": "http://127.0.0.1:3000/", "width": 1512, "height": 770 }, "timestamp": 1727655888530 }
        ]
      }

      post :create, params: payload

      expect(SpectatorSport::Event.last).to have_attributes(
        event_type: "Meta",
        event_source: nil
      )
    end

    it 'decodes event_type and event_source for an IncrementalSnapshot/MouseInteraction event' do
      payload = {
        "sessionId": "fb1x1aji7p5nljgnydya9kid7vncrzw48ir7d70h",
        "recordingId": "873h0zhhw66i9f1t36rh5myu8pzwopt676v9s83z",
        "events": [
          { "type": 3, "data": { "source": 2, "type": 2, "id": 5 }, "timestamp": 1727655888530 }
        ]
      }

      post :create, params: payload

      expect(SpectatorSport::Event.last).to have_attributes(
        event_type: "IncrementalSnapshot",
        event_source: "MouseInteraction"
      )
    end

    it 'decrypts the signed payload of a Custom/label event and stores only the decoded key/value' do
      label_verifier = Rails.application.message_verifier(:spectator_sport_label_recording)
      signed = label_verifier.generate({ "value" => "27", "key" => "user_id", "strategy" => "many" })

      payload = {
        "sessionId": "fb1x1aji7p5nljgnydya9kid7vncrzw48ir7d70h",
        "recordingId": "873h0zhhw66i9f1t36rh5myu8pzwopt676v9s83z",
        "events": [
          { "type": 5, "data": { "tag": "spectator_sport:label", "payload": { "signed": signed } }, "timestamp": 1727655888530 }
        ]
      }

      post :create, params: payload

      event = SpectatorSport::Event.last
      expect(event).to have_attributes(event_type: "Custom", event_source: nil)
      expect(event.label?).to eq(true)
      expect(event.label_key).to eq("user_id")
      expect(event.label_value).to eq("27")
      expect(event.event_data.dig("data", "payload")).not_to have_key("signed")
    end

    it 'stores an empty payload for a Custom/label event with an invalid signature' do
      payload = {
        "sessionId": "fb1x1aji7p5nljgnydya9kid7vncrzw48ir7d70h",
        "recordingId": "873h0zhhw66i9f1t36rh5myu8pzwopt676v9s83z",
        "events": [
          { "type": 5, "data": { "tag": "spectator_sport:label", "payload": { "signed": "not-a-valid-signature" } }, "timestamp": 1727655888530 }
        ]
      }

      post :create, params: payload

      event = SpectatorSport::Event.last
      expect(event.label?).to eq(true)
      expect(event.label_key).to be_nil
      expect(event.label_value).to be_nil
    end

    it 'decodes event_type for a Custom/history event' do
      payload = {
        "sessionId": "fb1x1aji7p5nljgnydya9kid7vncrzw48ir7d70h",
        "recordingId": "873h0zhhw66i9f1t36rh5myu8pzwopt676v9s83z",
        "events": [
          { "type": 5, "data": { "tag": "spectator_sport:history", "payload": { "href": "http://127.0.0.1:3000/next" } }, "timestamp": 1727655888530 }
        ]
      }

      post :create, params: payload

      event = SpectatorSport::Event.last
      expect(event).to have_attributes(event_type: "Custom", event_source: nil)
      expect(event.history?).to eq(true)
      expect(event.history_href).to eq("http://127.0.0.1:3000/next")
    end

    it 'records a Label from a Custom/label event bundled with events in a single request' do
      label_verifier = Rails.application.message_verifier(:spectator_sport_label_recording)
      signed = label_verifier.generate({ "value" => "42", "key" => "user_id", "strategy" => "one" })

      payload = {
        "sessionId": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        "recordingId": "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
        "events": [
          { "type": 4, "data": { "href": "http://127.0.0.1:3000/", "width": 1512, "height": 770 }, "timestamp": 1727655888530 },
          { "type": 5, "data": { "tag": "spectator_sport:label", "payload": { "signed": signed } }, "timestamp": 1727655888531 }
        ]
      }

      post :create, params: payload

      recording = SpectatorSport::Recording.find_by(secure_id: payload[:recordingId])
      expect(recording.labels.where(key: "user_id", value: "42")).to exist
    end

    context 'when recordings migration has not been applied' do
      before do
        allow(SpectatorSport::Recording).to receive(:migrated?).and_return(false)
      end

      it 'falls back to creating session and session_window using recordingId as the window secure_id' do
        payload = {
          "sessionId": "fb1x1aji7p5nljgnydya9kid7vncrzw48ir7d70h",
          "recordingId": "873h0zhhw66i9f1t36rh5myu8pzwopt676v9s83z",
          "events": [
            { "type": 4, "data": { "href": "http://127.0.0.1:3000/", "width": 1512, "height": 770 }, "timestamp": 1727655888530 }
          ]
        }

        expect { post :create, params: payload }.not_to change(SpectatorSport::Recording, :count)

        expect(SpectatorSport::Event.last).to have_attributes(
          session: SpectatorSport::Session.find_by(secure_id: payload[:sessionId]),
          session_window: SpectatorSport::SessionWindow.find_by(secure_id: payload[:recordingId])
        )
      end

      it 'still accepts the legacy windowId parameter in the fallback path' do
        payload = {
          "sessionId": "fb1x1aji7p5nljgnydya9kid7vncrzw48ir7d70h",
          "windowId": "873h0zhhw66i9f1t36rh5myu8pzwopt676v9s83z",
          "events": [
            { "type": 4, "data": { "href": "http://127.0.0.1:3000/", "width": 1512, "height": 770 }, "timestamp": 1727655888530 }
          ]
        }

        post :create, params: payload

        expect(SpectatorSport::Event.last).to have_attributes(
          session: SpectatorSport::Session.find_by(secure_id: payload[:sessionId]),
          session_window: SpectatorSport::SessionWindow.find_by(secure_id: payload[:windowId])
        )
      end

      it 'stores tags on the session_window' do
        tag_verifier = Rails.application.message_verifier(:spectator_sport_tag_recording)

        payload = {
          "sessionId": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          "recordingId": "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
          "events": [
            { "type": 4, "data": { "href": "http://127.0.0.1:3000/", "width": 1512, "height": 770 }, "timestamp": 1727655888530 }
          ],
          "tags": [ tag_verifier.generate("beta-user") ]
        }

        post :create, params: payload

        window = SpectatorSport::SessionWindow.find_by(secure_id: payload[:recordingId])
        expect(window.session_window_tags.pluck(:tag)).to include("beta-user")
      end
    end
  end
end
