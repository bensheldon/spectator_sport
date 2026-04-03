module SpectatorSport
  module ScriptHelper
    def spectator_sport_script_tags
      tag.script defer: true, src: spectator_sport.events_path(format: :js)
    end

    def spectator_sport_recording_tag(tag_value)
      signed = Rails.application.message_verifier(:spectator_sport_recording_tag).generate(tag_value)
      tag.meta(name: "spectator-sport-recording-tag", content: signed)
    end
  end
end
