# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  message     :text             not null
#  rating      :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  business_id :integer          not null
#  user_id     :integer          not null
#
# Indexes
#
#  index_reviews_on_business_id  (business_id)
#  index_reviews_on_user_id      (user_id)
#
require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
