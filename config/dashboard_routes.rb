SpectatorSport::Dashboard::Engine.routes.draw do
  root to: "recordings#index"
  resources :recordings, only: [ :index, :show, :destroy ] do
    member do
      get :details
      get :stream_events
    end
  end
  resources :session_windows, only: [ :index, :show, :destroy ] do
    member do
      get :details
      get :events
    end
  end
  resources :tags, only: [ :show ], param: :name

  scope :frontend, controller: :frontends, defaults: { version: SpectatorSport::VERSION.tr(".", "-") } do
    get "modules/:version/:id", action: :module, as: :frontend_module, constraints: { format: "js" }
    get "static/:version/:id", action: :static, as: :frontend_static
  end
end
