# @product

json.set! @product.id do 
        json.extract! @product, :id, :title, :description, :price, :inventory
end