SpectatorSport::Engine.routes.draw do
  resource :events, only: [ :create ]
end

SpectatorSport::Dashboard::Engine.routes.draw do
  get "/", to: "dashboards#index"
  resources :dashboards, only: [ :show, :destroy ]
end
