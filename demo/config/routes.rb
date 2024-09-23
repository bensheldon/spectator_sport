Rails.application.routes.draw do
  mount SpectatorSport::Engine => "/spectator_sport"

  root to: "examples#index"
end
