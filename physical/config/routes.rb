Physical::Application.routes.draw do
  root :to => 'home#index'
resources :users, :only => [:index, :new, :create]
resources :exercises, :only => [:index, :new, :create] do
  collection do
    get '/chart/:activity', :action => 'chart'
  end
end #refers to a way to get charts in excercises/activiy route

  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'


end
