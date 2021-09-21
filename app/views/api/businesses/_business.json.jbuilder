json.extract! business,
    :id,
    :address,
    :city,
    :closing,
    :name,
    :opening,
    :phone,
    :price_range,
    :state,
    :website,
    :zip_code

json.photoUrls business.photos.map { |file| url_for(file) }
