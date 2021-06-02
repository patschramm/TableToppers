class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :name, null: false, index: {unique: true}
      t.string :address, null: false, unique: true
      t.string :city, null: false
      t.string :state, null: false
      t.integer :zip_code, null: false
      t.string :phone, null: false
      t.string :website
      t.integer :opening, null: false
      t.integer :closing, null: false
      t.string :price_range, null: false
      t.timestamps
    end
  end
end
