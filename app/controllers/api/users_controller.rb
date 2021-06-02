class Api::UsersController < ApplicationController
  before_action :require_login, only: [:show, :index]
  skip_before_action :verify_authenticity_token

  def index
    @users = User.all
    render :index
  end

  def show
      @user = User.find(params[:id])
      render :show
  end
  
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
