# frozen_string_literal: true

require "rails_helper"

describe SpectatorSport::RecordingContext, type: :controller do
  controller(ActionController::Base) do
    include SpectatorSport::RecordingContext

    def index
      render plain: spectator_sport_window_id.to_s
    end
  end

  before do
    routes.draw { get "index" => "anonymous#index" }
  end

  let(:header_id) { "a" * 40 }
  let(:cookie_id) { "b" * 40 }

  describe "#spectator_sport_window_id" do
    it "returns the header value when present" do
      request.headers["X-Spectator-Sport-Window-Id"] = header_id
      get :index
      expect(response.body).to eq(header_id)
    end

    it "returns the cookie value when header is absent" do
      request.cookies["spectator_sport_window_id"] = cookie_id
      get :index
      expect(response.body).to eq(cookie_id)
    end

    it "prefers header over cookie when both present" do
      request.headers["X-Spectator-Sport-Window-Id"] = header_id
      request.cookies["spectator_sport_window_id"] = cookie_id
      get :index
      expect(response.body).to eq(header_id)
    end

    it "returns nil when neither present" do
      get :index
      expect(response.body).to eq("")
    end

    it "falls back to cookie when header is blank" do
      request.headers["X-Spectator-Sport-Window-Id"] = "   "
      request.cookies["spectator_sport_window_id"] = cookie_id
      get :index
      expect(response.body).to eq(cookie_id)
    end

    it "returns nil when value is too short" do
      request.headers["X-Spectator-Sport-Window-Id"] = "abc123"
      get :index
      expect(response.body).to eq("")
    end

    it "returns nil when value contains invalid characters" do
      request.headers["X-Spectator-Sport-Window-Id"] = "A" * 40
      get :index
      expect(response.body).to eq("")
    end

    it "returns value when valid 40-char lowercase alphanumeric" do
      valid_id = "a" * 20 + "0" * 20
      request.headers["X-Spectator-Sport-Window-Id"] = valid_id
      get :index
      expect(response.body).to eq(valid_id)
    end
  end
end
