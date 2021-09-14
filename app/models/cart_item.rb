class CartItem < ApplicationRecord

    validates :product_id, :shopper_id, presence: true

    belongs_to :shopper,
        foreign_key: :shopper_id,
        class_name: :User
    
    has_many :reviews,
        through: :shopper,
        source: :reviews

    belongs_to :product,
        foreign_key: :product_id,
        class_name: :Product
end
