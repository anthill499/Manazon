@cart_items.each do |cart_item|
        json.set! cart_item.id do
            json.extract! cart_item, :id, :shopper_id, :product_id, :product_quantity, :product
            json.photoUrl url_for(cart_item.product.photo)
        end
end
