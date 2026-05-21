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

    it 'stores labels bundled with events in a single request' do
      label_verifier = Rails.application.message_verifier(:spectator_sport_label_recording)

      payload = {
        "sessionId": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        "recordingId": "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
        "events": [
          { "type": 4, "data": { "href": "http://127.0.0.1:3000/", "width": 1512, "height": 770 }, "timestamp": 1727655888530 }
        ],
        "labels": [ label_verifier.generate({ "value" => "42", "key" => "user_id", "strategy" => "one" }) ]
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

      it 'stores labels on the session_window' do
        label_verifier = Rails.application.message_verifier(:spectator_sport_label_recording)

        payload = {
          "sessionId": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          "recordingId": "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
          "events": [
            { "type": 4, "data": { "href": "http://127.0.0.1:3000/", "width": 1512, "height": 770 }, "timestamp": 1727655888530 }
          ],
          "labels": [ label_verifier.generate({ "value" => "42", "key" => "user_id", "strategy" => "one" }) ]
        }

        post :create, params: payload

        window = SpectatorSport::SessionWindow.find_by(secure_id: payload[:recordingId])
        expect(window.labels.where(key: "user_id", value: "42")).to exist
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
