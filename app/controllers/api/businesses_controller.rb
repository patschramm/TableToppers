class Api::BusinessesController < ApplicationController

    def index
        @businesses = Business.all
        render :index
    end

    def show
        @business = Business.find_by(id: params[:id])
        if @business
            render :show
        else
            render json: ['This Business doesn\'t exist']
        end
    end

    def create
        @business = Business.new(business_params)
        if @business.save
            render :show
        else
            render json: @business.errors.full_messages, status: 401
        end
    end

    private

    def business_params
        params.require(:business).permit(
            :name,
            :address,
            :city,
            :closing,
            :opening,
            :phone,
            :price_range,
            :state,
            :zip_code)
    end
end
