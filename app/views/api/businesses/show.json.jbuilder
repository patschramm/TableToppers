json.partial! '/api/businesses/business', business: @business

@business
  .reviews
  .each do |review|
    json.reviews do
      json.set! review.id do
        json.partial! 'api/reviews/review', review: review
      end
    end

    # json.users do
    #   json.set! review.user_id do
    #     json.extract! review.user, :id, :username
    #   end
    # end
  end

  json.photoUrls @business.photos.map { |file| url_for(file) }
  json.categories @business.categories