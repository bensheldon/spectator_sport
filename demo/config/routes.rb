Rails.application.routes.draw do
  mount SpectatorSport::Engine => "/spectator_sport"
  mount SpectatorSport::Dashboard::Engine => "/spectator_sport_dashboard"

  root to: "examples#index"

  resources :examples, only: [ :index, :show, :new, :create ] do
    collection do
      get :error
      get :stopped
      get :recording_context
    end
  end
end
