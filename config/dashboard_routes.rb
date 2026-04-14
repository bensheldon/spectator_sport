SpectatorSport::Dashboard::Engine.routes.draw do
  root to: "dashboards#index"
  resources :session_windows, only: [ :show, :destroy ] do
    member do
      get :details
      get :events
    end
  end
  resources :tags, only: [ :show ], param: :name
  get "labels/tags/:value", to: "labels#tags", as: :label_tag
  get "labels/keys/:key", to: "labels#key_index", as: :label_key
  get "labels/keys/:key/:value", to: "labels#show", as: :label

  scope :frontend, controller: :frontends, defaults: { version: SpectatorSport::VERSION.tr(".", "-") } do
    get "modules/:version/:id", action: :module, as: :frontend_module, constraints: { format: "js" }
    get "static/:version/:id", action: :static, as: :frontend_static
  end
end
