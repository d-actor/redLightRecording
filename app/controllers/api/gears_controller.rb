class Api::GearsController < ApplicationController
  before_action :set_gear, except: [:index, :create]

  def index
    render json: Gear.all
  end

  def show
    render json: @gear
  end

  def create
    gear = Gear.new(gear_params)
    if gear.save
      render json: gear
    else
      render json: { errors: @gear.errors.full_messages.join(',') }, status: 422
    end
  end

  def update
    if @gear.update(gear_params)
      render json: @gear
    else
      render json: { errors: @gear.errors.full_messages.join(',') }, status: 422
    end
  end

  def destroy
    @gear.destroy
  end

  private
    def set_gear
      @gear = Gear.find(params[:id])
    end

    def gear_params
      params.require(:gear).permit(:name, :description, :image, :category)
    end
end
