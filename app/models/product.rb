class Product < ApplicationRecord
    validates :title, :description, :price, :inventory, presence: true

    has_one_attached :photo
end
