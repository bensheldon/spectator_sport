SpectatorSport::Dashboard::Engine.routes.draw do
  root to: "dashboards#index"
  resources :session_windows, only: [ :show, :destroy ] do
    member do
      get :events
    end
  end

  scope :frontend, controller: :frontends, defaults: { version: SpectatorSport::VERSION.tr(".", "-") } do
    get "modules/:version/:id", action: :module, as: :frontend_module, constraints: { format: "js" }
    get "static/:version/:id", action: :static, as: :frontend_static
  end
end
