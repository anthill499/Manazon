class ChangeCartItems < ActiveRecord::Migration[6.1]
  def change
    remove_index :cart_items, :product_id
    remove_index :cart_items, :shopper_id
    add_index :cart_items, [:product_id, :shopper_id], unique: true
  end
end
