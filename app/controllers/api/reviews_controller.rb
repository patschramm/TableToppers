class Api::ReviewsController < ApplicationController
    before_action :require_logged_in, except: [:index]

    def index
        @reviews = Review.all.where(business_id: params[:business_id])
        render :index
    end

    def show
        @review = Review.find(params[:id])
        render :show
    end

    def create
        @review = Review.create(review_params)
        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def edit
        @review = Review.find(params[:id])
    end

    def update
        @review = Review.find(params[:id])
        if @review.user_id == current_user.id && @review.update(review_params)
            render :show
        else
            render json: ["Review could not be updated"], stauts: 422
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
