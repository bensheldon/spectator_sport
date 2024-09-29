SpectatorSport::Engine.routes.draw do
  resources :events, only: [ :index, :create ]
end

SpectatorSport::Dashboard::Engine.routes.draw do
  get "/", to: "dashboards#index"
  # resources :dashboards, only: [ :show, :destroy ]
  resources :session_windows, only: [ :show, :destroy ]
end
