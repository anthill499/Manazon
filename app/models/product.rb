class Product < ApplicationRecord
    validates :title, :description, :price, :inventory, presence: true
    
    has_one_attached :photo

    has_many :reviews,
        primary_key: :id,
        foreign_key: :product_id,
        class_name: :Review
    
end
