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
require 'test_helper'

class BusinessTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
