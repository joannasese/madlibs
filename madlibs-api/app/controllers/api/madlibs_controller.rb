class Api::MadlibsController < ApplicationController
  before_action :set_madlib, only: [:show, :update, :destroy]

  def index
    render json: Madlib.all
  end

  def create
    madlib = Madlib.new(madlib_params)
    if madlib.save
      render json: madlib
    else
      render json: { message: madlib.errors }, status: 400
    end
  end

  def show
    render json: @madlib
  end

  def update
    # @madlib = Madlib.find(params[:id])
    # @madlib.counter += 1;
    if @madlib.save
      render json: @madlib
    else
      render json: { message: @madlib.errors }, status: 400
    end
  end

  # def destroy
  #   if @madlib.destroy
  #     render json: { message: "In the trash" }, status: 204
  #   else
  #     render json: { message: "Unable to destroy" }, status: 400
  #   end
  # end

  private

    def set_madlib
      @madlib = Madlib.find_by_id(params[:id])
    end

    def madlib_params
      params.fetch(:madlib).permit(:noun, :verb, :adj, :counter, :sentence)
    end
end
