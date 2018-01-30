Rails.application.routes.draw do
  namespace :api do
    resources :madlibs, except: [:new, :edit]
    # new and edit serverside routes to load forms
  end
end
