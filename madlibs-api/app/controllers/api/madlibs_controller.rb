class Api::Madlibs < ApplicationController
  def index
    render json: Madlib.all
  end
end
