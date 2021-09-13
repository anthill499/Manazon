@reviews.each do |review|
      json.set! review.id do 
            json.extract! review, :id, :title, :body, :rating, :product_id, :reviewer_id, :created_at
            json.extract! review.reviewer, :username
      end
end
