class KudosController < ApplicationController
  # GET /kudos
  def index
    @kudos = User.first.kudos_received
    render json: @kudos, status: :ok
  end

  # GET /users/:user_id/kudos
  def show
    @user = User.find(params[:id])
    @kudos = @user.kudos_received
    render json: @kudos, status: :ok
  end

  # POST /kudos
  def create
    if params[:giver_id] == params[:receiver_id] 
      render_error("You can't give yourself a kudo!", :forbidden) and return
    end
    
    @kudo = Kudo.create!(kudo_params)
    render json: @kudo, status: :created
  end

  # DELETE /kudos/:id
  def destroy
    Kudo.find(params[:id]).destroy
    head :no_content
  end

  private

  def render_error(error, status)
    render json: {error: error}, status: status
  end

  def kudo_params
    params.permit(:text, :giver_id, :receiver_id)
  end
end
