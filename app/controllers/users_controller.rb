class UsersController < ApplicationController
  skip_before_action :authenticate_request, only: :create

  # GET /users
  def index
    @users = current_team.users
    render json: @users, status: :ok
  end

  # GET /users/:id
  def show
    @user = User.find(params[:id])
    render json: @user, status: :ok
  end

  # POST /user
  def create
    @user = User.create!(user_params)
    result = AuthenticateUser.new(user_params[:username], user_params[:password]).call
    render json: { auth_token: result }
  end

  private

  def user_params
    params.permit(:username, :first_name, :last_name, :password).merge(team: team)
  end

  def team
    team ||= Team.find_or_create_by(name: team_param[:team])
  end

  def team_param
    params.permit(:team)
  end
end
