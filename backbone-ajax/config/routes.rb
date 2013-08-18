Integrated::Application.routes.draw do

  # resources :comments


  root :to => "home#index"

  resources :posts do
    resources :comments
  end

end
