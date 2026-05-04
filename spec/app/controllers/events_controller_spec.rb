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
        "windowId": "873h0zhhw66i9f1t36rh5myu8pzwopt676v9s83z",
        "events": [
          { "type": 4, "data": { "href": "http://127.0.0.1:3000/", "width": 1512, "height": 770 }, "timestamp": 1727655888530 }
        ]
      }

      post :create, params: payload

      expect(SpectatorSport::Event.last).to have_attributes(
        session: SpectatorSport::Session.find_by(secure_id: payload[:sessionId])
      )
    end

    it 'stores tags and labels bundled with events in a single request' do
      tag_verifier = Rails.application.message_verifier(:spectator_sport_tag_recording)
      label_verifier = Rails.application.message_verifier(:spectator_sport_label_recording)

      payload = {
        "sessionId": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        "windowId": "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
        "events": [
          { "type": 4, "data": { "href": "http://127.0.0.1:3000/", "width": 1512, "height": 770 }, "timestamp": 1727655888530 }
        ],
        "tags": [ tag_verifier.generate("beta-user") ],
        "labels": [ label_verifier.generate({ "value" => "42", "key" => "user_id", "strategy" => "one" }) ]
      }

      post :create, params: payload

      window = SpectatorSport::SessionWindow.find_by(secure_id: payload[:windowId])
      expect(window.session_window_tags.pluck(:tag)).to include("beta-user")
      expect(window.labels.where(key: "user_id", value: "42")).to exist
    end
  end
end
