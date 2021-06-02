class CreateBusinessCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :business_categories do |t|
      t.integer :category_id, null: false, index: true
      t.integer :business_id, null: false, index: true
      t.timestamps
    end
  end
end
