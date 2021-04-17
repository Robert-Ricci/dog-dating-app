Rails.application.routes.draw do
  get 'model/user'
  get 'user/name'
  get 'user/email'
  get 'user/password'
  resources :pets
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
