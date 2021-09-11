class Review < ApplicationRecord
    validates :reviewer_id, :product_id, :rating, presence: true
end
