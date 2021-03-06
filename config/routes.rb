Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  get '/messages', to: 'pages#messages', as: 'messages'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :channels, only: [:index, :create] do
        resources :messages, only: [:index, :create]
      end
    end
  end

  resources :api_token
end
