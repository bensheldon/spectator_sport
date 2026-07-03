module SpectatorSport
  class Engine < ::Rails::Engine
    isolate_namespace SpectatorSport

    initializer "spectator_sport.deprecator" do |app|
      app.deprecators[:spectator_sport] = SpectatorSport.deprecator
    end

    config.after_initialize do
      ActiveSupport.on_load :action_view do
        # TODO: this should probably be done manually by the client, maybe?
        include SpectatorSport::ScriptHelper
      end
    end
  end

  module Dashboard
    class Engine < ::Rails::Engine
      isolate_namespace SpectatorSport::Dashboard
      paths.add "config/routes.rb", with: "config/dashboard_routes.rb"
    end
  end
end
