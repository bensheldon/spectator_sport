# frozen_string_literal: true

require 'rails_helper'

describe SpectatorSport::ScriptHelper, type: :helper do
  # Redraw the host application's routes for each example, then restore them.
  after { Rails.application.reload_routes! }

  def draw_routes(&block)
    Rails.application.routes.draw(&block)
  end

  describe "#spectator_sport_script_tags" do
    it "renders the events script tag for the default mount" do
      draw_routes { mount SpectatorSport::Engine, at: "/spectator_sport" }

      expect(helper.spectator_sport_script_tags).to eq('<script defer="defer" src="/spectator_sport/events.js"></script>')
    end

    it "accepts the route name the engine is mounted as" do
      draw_routes { mount SpectatorSport::Engine, at: "/session_recorder", as: :session_recorder }

      expect(helper.spectator_sport_script_tags(mounted_as: :session_recorder)).to include('src="/session_recorder/events.js"')
    end

    it "accepts the route name of an engine mounted within namespaces" do
      draw_routes do
        namespace :foo do
          namespace :bar do
            mount SpectatorSport::Engine, at: "/spectator_sport"
          end
        end
      end

      expect(helper.spectator_sport_script_tags(mounted_as: :foo_bar_spectator_sport)).to include('src="/foo/bar/spectator_sport/events.js"')
    end

    it "raises a helpful error when the engine is not mounted as the given name" do
      draw_routes { mount SpectatorSport::Engine, at: "/spectator_sport" }

      expect { helper.spectator_sport_script_tags(mounted_as: :recorder) }
        .to raise_error(ActionController::UrlGenerationError, /SpectatorSport::Engine is not mounted as `recorder`/)
    end
  end
end
