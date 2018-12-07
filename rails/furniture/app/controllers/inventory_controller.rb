class InventoryController < ApplicationController
  def all_products
    Product.all
  end

  def one_product
    Product.limit(1)
  end

  def by_category
    @product = where(params[:category])
  end
end
