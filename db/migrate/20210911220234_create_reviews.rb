class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :title
      t.string :body
      t.integer :rating, null: false
      t.integer :reviewer_id, null: false
      t.integer :product_id, null: false
      t.integer :inventory, null: false
      t.integer :category_id, null: false
      t.timestamps
    end
  end
end
