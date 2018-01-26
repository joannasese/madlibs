Rails.application.routes.draw do
  namespace :api do
    resources :madlibs, except: [:new, :edit]
  end
end
