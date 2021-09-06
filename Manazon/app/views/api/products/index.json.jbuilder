# json.array! @products, :id, :title, :description, :price, :inventory



@products.each do |product|
    json.set! product.id do 
        json.extract! product, :id, :title, :description, :price, :inventory
    end
end