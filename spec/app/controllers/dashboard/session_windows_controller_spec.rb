# frozen_string_literal: true

require "rails_helper"

describe SpectatorSport::Dashboard::SessionWindowsController, type: :controller do
  render_views

  before do
    @routes = SpectatorSport::Dashboard::Engine.routes
  end

  let(:spectator_session) { SpectatorSport::Session.create!(secure_id: "test-session-id") }
  let(:session_window) { SpectatorSport::SessionWindow.create!(session: spectator_session, secure_id: "test-window-id") }

  describe "GET #show" do
    it "renders successfully" do
      get :show, params: { id: session_window.id }

      expect(response).to be_successful
    end

    it "renders labels when migrated" do
      SpectatorSport::Label.create!(session_window: session_window, key: "user_id", value: "42", multiple: false)

      get :show, params: { id: session_window.id }

      expect(response.body).to include("user_id")
      expect(response.body).to include("42")
    end

    it "renders tags when migrated" do
      SpectatorSport::SessionWindowTag.create!(session_window: session_window, tag: "test-tag")

      get :show, params: { id: session_window.id }

      expect(response.body).to include("test-tag")
    end
  end

  describe "DELETE #destroy" do
    it "deletes the session window and redirects" do
      id = session_window.id

      delete :destroy, params: { id: id }

      expect(SpectatorSport::SessionWindow.find_by(id: id)).to be_nil
      expect(response).to redirect_to(root_path)
    end

    it "deletes associated events" do
      SpectatorSport::Event.insert_all([{
        session_id: spectator_session.id,
        session_window_id: session_window.id,
        event_data: { "type" => 4 }.to_json,
        created_at: Time.current,
        updated_at: Time.current
      }])
      event_id = SpectatorSport::Event.where(session_window_id: session_window.id).pick(:id)

      delete :destroy, params: { id: session_window.id }

      expect(SpectatorSport::Event.find_by(id: event_id)).to be_nil
    end

    it "deletes associated labels" do
      label = SpectatorSport::Label.create!(session_window: session_window, key: "env", value: "prod", multiple: false)

      delete :destroy, params: { id: session_window.id }

      expect(SpectatorSport::Label.find_by(id: label.id)).to be_nil
    end

    it "deletes associated tags" do
      tag = SpectatorSport::SessionWindowTag.create!(session_window: session_window, tag: "my-tag")

      delete :destroy, params: { id: session_window.id }

      expect(SpectatorSport::SessionWindowTag.find_by(id: tag.id)).to be_nil
    end
  end
end
