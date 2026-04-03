module SpectatorSport
  module ScriptHelper
    def spectator_sport_script_tags
      tag.script defer: true, src: spectator_sport.events_path(format: :js)
    end

    def spectator_sport_tag_recording(tag_value)
      signed = Rails.application.message_verifier(:spectator_sport_tag_recording).generate(tag_value)
      tag.meta(name: "spectator-sport-recording-tag", content: signed)
    end

    def spectator_sport_stop_recording
      tag.meta(name: "spectator-sport-stop")
    end
  end
end
