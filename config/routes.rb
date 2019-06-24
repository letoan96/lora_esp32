Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  mount ActionCable.server => "/cable"

  root 'esp32#index'

  post   'post_data' => 'esp32#post_data'
end
