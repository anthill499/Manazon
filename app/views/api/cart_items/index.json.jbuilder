
@cart_items.each do |cart_item|
    # json.cart_items do 
        json.set! cart_item.id do
            json.extract! cart_item, :id, :shopper_id, :product_id, :product_quantity
            # json.extract! cart_item.product, :id, :title, :description, :price, :inventory, :rating
            # json.photoUrl url_for(cart_item.product.photo)
        end
    # end
end
