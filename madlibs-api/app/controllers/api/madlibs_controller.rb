class Api::MadlibsController < ApplicationController
  def index
    render json: Madlib.all
  end
end
