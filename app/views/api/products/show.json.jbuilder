json.extract! @product, :id, :title, :description, :price, :inventory
json.photoUrl url_for(@product.photo) if @product.photo.attached?

