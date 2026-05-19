# frozen_string_literal: true

require "rails_helper"

describe SpectatorSport::Dashboard::LabelsController, type: :controller do
  render_views

  before do
    @routes = SpectatorSport::Dashboard::Engine.routes
  end

  let(:spectator_session) { SpectatorSport::Session.create!(secure_id: "test-session-id") }
  let(:session_window) { SpectatorSport::SessionWindow.create!(session: spectator_session, secure_id: "test-window-id") }

  describe "GET #tags" do
    it "renders session windows with the matching tag label" do
      SpectatorSport::Label.create!(session_window: session_window, key: nil, value: "featured", multiple: false)

      get :tags, params: { value: "featured" }

      expect(response).to be_successful
      expect(response.body).to include("featured")
    end

    it "loads all labels on matching session windows, not just the filtered one" do
      SpectatorSport::Label.create!(session_window: session_window, key: nil, value: "featured", multiple: false)
      SpectatorSport::Label.create!(session_window: session_window, key: "env", value: "prod", multiple: false)

      get :tags, params: { value: "featured" }

      expect(response.body).to include("env")
      expect(response.body).to include("prod")
    end

    it "does not include session windows without the label" do
      other_session = SpectatorSport::Session.create!(secure_id: "other-session-id")
      other_window = SpectatorSport::SessionWindow.create!(session: other_session, secure_id: "other-window-id")
      SpectatorSport::Label.create!(session_window: other_window, key: nil, value: "other", multiple: false)

      get :tags, params: { value: "featured" }

      expect(response.body).not_to include("other-session-id")
    end
  end

  describe "GET #key_index" do
    it "renders session windows with the matching label key" do
      SpectatorSport::Label.create!(session_window: session_window, key: "env", value: "prod", multiple: false)

      get :key_index, params: { key: "env" }

      expect(response).to be_successful
      expect(response.body).to include("env")
    end

    it "loads all labels on matching session windows, not just the filtered one" do
      SpectatorSport::Label.create!(session_window: session_window, key: "env", value: "prod", multiple: false)
      SpectatorSport::Label.create!(session_window: session_window, key: "user_id", value: "42", multiple: false)

      get :key_index, params: { key: "env" }

      expect(response.body).to include("user_id")
      expect(response.body).to include("42")
    end
  end

  describe "GET #show" do
    it "renders session windows with the matching label key and value" do
      SpectatorSport::Label.create!(session_window: session_window, key: "env", value: "prod", multiple: false)

      get :show, params: { key: "env", value: "prod" }

      expect(response).to be_successful
      expect(response.body).to include("env")
      expect(response.body).to include("prod")
    end

    it "loads all labels on matching session windows, not just the filtered one" do
      SpectatorSport::Label.create!(session_window: session_window, key: "env", value: "prod", multiple: false)
      SpectatorSport::Label.create!(session_window: session_window, key: "user_id", value: "42", multiple: false)

      get :show, params: { key: "env", value: "prod" }

      expect(response.body).to include("user_id")
      expect(response.body).to include("42")
    end

    it "does not include session windows with a different label value" do
      other_session = SpectatorSport::Session.create!(secure_id: "other-session-id")
      other_window = SpectatorSport::SessionWindow.create!(session: other_session, secure_id: "other-window-id")
      SpectatorSport::Label.create!(session_window: other_window, key: "env", value: "staging", multiple: false)

      get :show, params: { key: "env", value: "prod" }

      expect(response.body).not_to include("other-session-id")
    end
  end
end
