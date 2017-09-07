Rails.application.routes.draw do

scope :api do
  resources :reservation_slots
  resources :locations
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

  get "*path" => 'application#static'

end
