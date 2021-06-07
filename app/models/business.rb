# == Schema Information
#
# Table name: businesses
#
#  id          :bigint           not null, primary key
#  address     :string           not null
#  city        :string           not null
#  closing     :integer          not null
#  name        :string           not null
#  opening     :integer          not null
#  phone       :string           not null
#  price_range :string           not null
#  state       :string           not null
#  website     :string
#  zip_code    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# Indexes
#
#  index_businesses_on_name  (name) UNIQUE
#
class Business < ApplicationRecord
    validates: :address, :city, :closing, :opening, :phone, :price_range, :state, :zip_code, presence: true
    validates: :name, presence: true, uniqueness: true

    has_many :reviews,
        foreign_key: :business_id,
        class: :Review
    
    has_many :business_categories,
        foreign_key: :business_id,
        class: :BusinessCategory

    has_many :categories,
        through: :business_categories,
        source: :category
            
end
