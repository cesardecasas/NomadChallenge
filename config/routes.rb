Rails.application.routes.draw do
  resources :appointments
  resources :availabilities
  resources :days
  resources :coaches
  root 'pages#index'

  match '*path', to: 'pages#index', via: :all 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
