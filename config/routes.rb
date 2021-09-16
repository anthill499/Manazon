Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "static_pages#root"
  
  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create, :show]
    resources :cart_items, only: [:index, :create, :update, :destroy, :show]
    resource :session, only: [:create, :destroy]
    get 'search', to: 'products#search'
    resources :products, only: [:index, :show] do
      resources :reviews, only: [:index, :create, :update, :destroy]
    end
  end
end

