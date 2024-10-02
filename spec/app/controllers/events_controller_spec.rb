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
  end
end
