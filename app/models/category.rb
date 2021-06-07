# == Schema Information
#
# Table name: categories
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Category < ApplicationRecord
    validates: :name, presense: true

    has_many :business_categories,
        foreign_key: :catergory_id,
        class: :BusinessCategory

    has_many :businesses,
        through: :business_categories,
        source: :business

end
