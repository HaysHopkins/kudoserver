Rails.application.routes.draw do
  root to: 'static#index'
  post 'authenticate', to: 'authentication#authenticate'
  
  resources :kudos
  resources :users do 
    get :me, to: 'users#show', on: :collection, defaults: { id: 1 }
    get :kudos, to: 'kudos#show', on: :member
  end
end
