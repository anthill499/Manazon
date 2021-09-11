class ChangeReviews < ActiveRecord::Migration[6.1]
  def change
    remove_column :reviews, :category_id
  end
end
