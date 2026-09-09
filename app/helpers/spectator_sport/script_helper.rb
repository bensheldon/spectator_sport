module SpectatorSport
  module ScriptHelper
    # Pass +mounted_as+ when the engine is mounted with a different +as:+ option
    # or within a namespace, e.g. <tt>mounted_as: :admin_spectator_sport</tt>
    def spectator_sport_script_tags(mounted_as: :spectator_sport)
      routes = public_send(mounted_as) if respond_to?(mounted_as)
      unless routes.respond_to?(:events_path)
        raise ActionController::UrlGenerationError, "SpectatorSport::Engine is not mounted as `#{mounted_as}`. " \
                                                    "Mount it in config/routes.rb with `mount SpectatorSport::Engine, at: \"/spectator_sport\"`, " \
                                                    "or pass the name it is mounted as, e.g. `spectator_sport_script_tags(mounted_as: :admin_spectator_sport)`."
      end

      tag.script defer: true, src: routes.events_path(format: :js)
    end

    def spectator_sport_tag_recording(tag_value)
      SpectatorSport.deprecator.warn(
        "`spectator_sport_tag_recording` is deprecated and will be removed in a future version. " \
        "Use `spectator_sport_label_recording` instead."
      )
      spectator_sport_label_recording(tag_value)
    end

    def spectator_sport_label_recording(value, key: nil, strategy: :many)
      label_data = { value: value, key: key, strategy: strategy.to_s }
      signed = Rails.application.message_verifier(:spectator_sport_label_recording).generate(label_data)
      tag.meta(name: "spectator-sport-recording-label", content: signed)
    end

    def spectator_sport_stop_recording
      tag.meta(name: "spectator-sport-stop")
    end
  end
end
