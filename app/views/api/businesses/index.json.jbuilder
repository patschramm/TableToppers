@businesses.each do |business|
  json.set! business.id do
    json.partial! 'business', business: business
    json.reviews business.reviews
  end
end