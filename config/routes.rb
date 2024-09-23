SpectatorSport::Engine.routes.draw do
  root to: "dashboards#index"
  resource :events, only: [:create]
end
