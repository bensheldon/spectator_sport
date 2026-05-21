# frozen_string_literal: true

require "rails_helper"

describe SpectatorSport::Dashboard::LabelsController, type: :controller do
  render_views

  before do
    @routes = SpectatorSport::Dashboard::Engine.routes
  end

  let(:recording) { SpectatorSport::Recording.create!(secure_id: "test-recording-id") }

  describe "GET #tags" do
    it "renders recordings with the matching tag label" do
      SpectatorSport::Label.create!(recording: recording, key: nil, value: "featured", multiple: false)

      get :tags, params: { value: "featured" }

      expect(response).to be_successful
      expect(response.body).to include("featured")
    end

    it "loads all labels on matching recordings, not just the filtered one" do
      SpectatorSport::Label.create!(recording: recording, key: nil, value: "featured", multiple: false)
      SpectatorSport::Label.create!(recording: recording, key: "env", value: "prod", multiple: false)

      get :tags, params: { value: "featured" }

      expect(response.body).to include("env")
      expect(response.body).to include("prod")
    end

    it "does not include recordings without the label" do
      other_recording = SpectatorSport::Recording.create!(secure_id: "other-recording-id")
      SpectatorSport::Label.create!(recording: other_recording, key: nil, value: "other", multiple: false)

      get :tags, params: { value: "featured" }

      expect(response.body).not_to include("other-recording-id")
    end
  end

  describe "GET #key_index" do
    it "renders recordings with the matching label key" do
      SpectatorSport::Label.create!(recording: recording, key: "env", value: "prod", multiple: false)

      get :key_index, params: { key: "env" }

      expect(response).to be_successful
      expect(response.body).to include("env")
    end

    it "loads all labels on matching recordings, not just the filtered one" do
      SpectatorSport::Label.create!(recording: recording, key: "env", value: "prod", multiple: false)
      SpectatorSport::Label.create!(recording: recording, key: "user_id", value: "42", multiple: false)

      get :key_index, params: { key: "env" }

      expect(response.body).to include("user_id")
      expect(response.body).to include("42")
    end
  end

  describe "GET #show" do
    it "renders recordings with the matching label key and value" do
      SpectatorSport::Label.create!(recording: recording, key: "env", value: "prod", multiple: false)

      get :show, params: { key: "env", value: "prod" }

      expect(response).to be_successful
      expect(response.body).to include("env")
      expect(response.body).to include("prod")
    end

    it "loads all labels on matching recordings, not just the filtered one" do
      SpectatorSport::Label.create!(recording: recording, key: "env", value: "prod", multiple: false)
      SpectatorSport::Label.create!(recording: recording, key: "user_id", value: "42", multiple: false)

      get :show, params: { key: "env", value: "prod" }

      expect(response.body).to include("user_id")
      expect(response.body).to include("42")
    end

    it "does not include recordings with a different label value" do
      other_recording = SpectatorSport::Recording.create!(secure_id: "other-recording-id")
      SpectatorSport::Label.create!(recording: other_recording, key: "env", value: "staging", multiple: false)

      get :show, params: { key: "env", value: "prod" }

      expect(response.body).not_to include("other-recording-id")
    end
  end
end
