class AuthenticationController < ApplicationController
  skip_before_action :authenticate_request

  def authenticate
    result = AuthenticateUser.new(params[:username], params[:password]).call
    render json: { auth_token: result }
  rescue Exceptions::InvalidCredentials
    render json: { error: "Invalid credentials" }, status: :unauthorized
  end
end