json.extract! @review, :id, :title, :body, :rating, :product_id, :reviewer_id
json.extract! @review.reviewer, :username
