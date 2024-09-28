module SpectatorSport
  module ScriptHelper
    def spectator_sport_script_tags
      tag.script defer: true, src: spectator_sport.events_path(format: :js)
    end
  end
end
