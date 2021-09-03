Rails.application.routes.draw do
  resources :availabilities
  resources :days
  resources :coaches
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :appointments, only: [:index, :create, :destroy, :update]
    end
  end

  namespace :api do
    namespace :v1 do
      resources :coaches, only: [:index, :create, :destroy, :update]
    end
  end

  match '*path', to: 'pages#index', via: :all 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
