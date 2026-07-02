# frozen_string_literal: true

require "rails_helper"

describe SpectatorSport::Dashboard::RecordingsController, type: :controller do
  render_views

  before do
    @routes = SpectatorSport::Dashboard::Engine.routes
  end

  let(:recording) { SpectatorSport::Recording.create!(secure_id: "test-recording-id") }

  describe "GET #index" do
    it "renders recordings when no query is given" do
      recording

      get :index

      expect(response).to be_successful
      expect(response.body).to include("Recording ##{recording.id}")
    end

    it "filters recordings by the label query" do
      other_recording = SpectatorSport::Recording.create!(secure_id: "other-recording-id")
      SpectatorSport::Label.create!(recording: recording, key: "env", value: "prod", multiple: false)
      SpectatorSport::Label.create!(recording: other_recording, key: "env", value: "staging", multiple: false)

      get :index, params: { query: "label:env:prod" }

      expect(response.body).to include("Recording ##{recording.id}")
      expect(response.body).not_to include("Recording ##{other_recording.id}")
    end

    it "renders a syntax error message instead of raising, and shows no recordings" do
      recording

      get :index, params: { query: "label:a)" }

      expect(response).to be_successful
      expect(response.body).to include("trailing input")
      expect(response.body).not_to include("Recording ##{recording.id}")
    end
  end

  describe "GET #show" do
    it "renders successfully" do
      get :show, params: { id: recording.id }

      expect(response).to be_successful
    end

    it "renders labels when migrated" do
      SpectatorSport::Label.create!(recording: recording, key: "user_id", value: "42", multiple: false)

      get :show, params: { id: recording.id }

      expect(response.body).to include("user_id")
      expect(response.body).to include("42")
    end
  end

  describe "DELETE #destroy" do
    it "deletes the recording and redirects" do
      id = recording.id

      delete :destroy, params: { id: id }

      expect(SpectatorSport::Recording.find_by(id: id)).to be_nil
      expect(response).to redirect_to(root_path)
    end

    it "deletes associated events" do
      SpectatorSport::Event.insert_all([ {
        recording_id: recording.id,
        event_data: { "type" => 4 }.to_json,
        created_at: Time.current,
        updated_at: Time.current
      } ])
      event_id = SpectatorSport::Event.where(recording_id: recording.id).pick(:id)

      delete :destroy, params: { id: recording.id }

      expect(SpectatorSport::Event.find_by(id: event_id)).to be_nil
    end

    it "deletes associated labels" do
      label = SpectatorSport::Label.create!(recording: recording, key: "env", value: "prod", multiple: false)

      delete :destroy, params: { id: recording.id }

      expect(SpectatorSport::Label.find_by(id: label.id)).to be_nil
    end
  end
end
