class Review < ApplicationRecord
    validates :reviewer_id, :product_id, :rating, presence: true
    
    belongs_to :product,
    primary_key: :id,
    foreign_key: :product_id,
    class_name: :Product

    belongs_to :reviewer,
    primary_key: :id,
    foreign_key: :reviewer_id,
    class_name: :User

end
