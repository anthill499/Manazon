class Product < ApplicationRecord
    validates :title, :description, :price, :inventory, presence: true
end
