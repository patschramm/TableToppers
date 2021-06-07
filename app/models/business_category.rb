# == Schema Information
#
# Table name: business_categories
#
#  id          :bigint           not null, primary key
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  business_id :integer          not null
#  category_id :integer          not null
#
# Indexes
#
#  index_business_categories_on_business_id  (business_id)
#  index_business_categories_on_category_id  (category_id)
#
class BusinessCategory < ApplicationRecord
    belongs_to :business,
        foreign_key: :business_id,
        class_name: :Business 

    belongs_to :category,
        foreign_key: :category_id,
        class_name: :Category
end
