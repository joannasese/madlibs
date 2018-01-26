class Api::MadlibsController < ApplicationController
  def index
    render json: Madlib.all
  end

  def show
    render json: Madlib.find_by_id(params[:id])
  end
end
