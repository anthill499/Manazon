json.extract! @product, :id, :title, :description, :price, :inventory, :rating
json.photoUrl url_for(@product.photo) if @product.photo.attached? 
json.set! :reviews do 
json.array! @product.reviews
end