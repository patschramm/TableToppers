Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :businesses, only: [:index, :show, :create] do
      resources :reviews, only: [:index, :show, :create, :update, :destroy]
    end
  end

  root to: "static_pages#root";
end
