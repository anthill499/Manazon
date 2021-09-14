class CreateCartItems < ActiveRecord::Migration[6.1]
  def change
    create_table :cart_items do |t|
      t.integer :product_quantity,	null: false
	    t.integer	:product_id, null: false
      t.integer :shopper_id, null: false
      t.timestamps
    end
    add_index :cart_items, :product_id
    add_index :cart_items, :shopper_id
  end
end
