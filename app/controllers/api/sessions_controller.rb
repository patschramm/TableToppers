class Api::SessionsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
        @user = User.find_by_credentials(
            params[:user][:email], 
            params[:user][:password]
            )
        if !@user
            render json: ['The email address or password you entered is incorrect.'],
            status: 401
        else
            login(@user)
            render 'api/users/show'
        end
    end 

    def destroy
        if (logged_in?)
            logout
            render json: {}
        else
            render json: ['no current user to logout'], status: 404
        end
    end
end
