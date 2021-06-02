class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :rating, null: false
      t.text :message, null: false
      t.integer :user_id, null: false, index: true
      t.integer :business_id, null: false, index: true
      t.timestamps
    end
  end
end
