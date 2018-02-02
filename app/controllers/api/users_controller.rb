class Api::UsersController < ApplicationController


  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @users.errors.full_messages, status: 422
    end
  end

  def show
    render json: ["You logged in. You're at the users show page, api/users/show"]
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email)
  end

end
