class Api::ReviewsController < ApplicationController
    # before_action :require_login, except: [:index]

    def index
        @reviews = Review.all.where(business_id: params[:business_id])
        render :index
    end

    def show
        @review = Review.find(params[:id])
        render :show
    end

    def create
        @review = Review.new(review_params)
        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end
    
    def update
        @review = Review.find(params[:id])
        user = current_user
        if @review.user_id == user.id && @review.update(review_params)
            render :show
        else
            render json: ["Review could not be updated"], status: 422
        end
    end

    def destroy
        @review = Review.find_by(id: params[:id])
        if @review && @review.destroy
            render :show
        else
            render json: ["Review could not be deleted"], status: 422
        end
    end

    private

    def review_params
        params.require(:review).permit(
            :message,
            :rating,
            :user_id,
            :business_id
        )
    end
end
