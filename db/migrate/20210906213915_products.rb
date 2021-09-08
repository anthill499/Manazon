class Products < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.float :price, null: false
      t.integer :inventory, null: false
      t.integer :category_id, null: false
      t.timestamps
    end
  end
end

