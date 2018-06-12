class ApplicationController < ActionController::API
  include ErrorHandling

  before_action :authenticate_request
  attr_reader :current_user

  def current_team
    @current_team ||= current_user.team  
  end

  private

  def authenticate_request
    @current_user = AuthorizeApiRequest.new(request.headers).call
  rescue Exceptions::InvalidToken, Exceptions::MissingToken
    render json: { error: 'Not Authorized' }, status: 401 unless @current_user
  end
end
