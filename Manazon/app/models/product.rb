class Product < ApplicationRecord
    validates :title, :description, :price, :inventory, :category_id
    
end
