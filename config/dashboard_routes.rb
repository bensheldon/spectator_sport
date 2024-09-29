SpectatorSport::Dashboard::Engine.routes.draw do
  root to: "dashboards#index"
  resources :session_windows, only: [ :show, :destroy ]
end
