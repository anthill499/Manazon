@products.each do |product|
    json.set! product.id do 
        json.extract! product, :id, :title, :description, :price, :inventory, :rating
        json.photoUrl url_for(product.photo) if product.photo.attached? 
        # json.reviews product.reviews  
    end

end