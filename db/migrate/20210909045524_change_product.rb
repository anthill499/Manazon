class ChangeProduct < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :rating, :float, null: false
  end
end
