Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show] do
      resources :likes, only: [:create, :destroy, :show, :index]
    end
    resource :session, only: [:create, :destroy]
    resources :articles, only: [:create, :show, :update, :destroy, :index] do
      resources :comments, only: [:create, :index, :destroy]
    end

  end
  root "static_pages#root"
end
