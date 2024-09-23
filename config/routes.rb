SpectatorSport::Engine.routes.draw do
  resource :events, only: [:create]
end
