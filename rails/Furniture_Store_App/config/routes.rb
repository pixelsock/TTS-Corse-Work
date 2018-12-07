Rails.application.routes.draw do
  get 'products/name:string'
  get 'products/price:decimal'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
