Rails.application.routes.draw do
  mount SpectatorSport::Engine => "/spectator_sport"

  root to: "examples#index"

  resources :examples, only: [ :index, :show, :new, :create ]
end
