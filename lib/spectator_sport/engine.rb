module SpectatorSport
  class Engine < ::Rails::Engine
    isolate_namespace SpectatorSport

    initializer "local_helper.action_controller" do
      ActiveSupport.on_load :action_controller do
        # TODO: this should probably be done manually by the client, maybe?
        helper SpectatorSport::ScriptHelper
      end
    end
  end

  module Dashboard
    class Engine < ::Rails::Engine
      isolate_namespace SpectatorSport::Dashboard
    end
  end
end
