class ChangeReviews2 < ActiveRecord::Migration[6.1]
  def change
    remove_column :reviews, :inventory
  end
end
