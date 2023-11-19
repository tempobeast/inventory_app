Rails.application.routes.draw do
  resources :transfers
  resources :repairs
  resources :computers
  resources :buildings
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
