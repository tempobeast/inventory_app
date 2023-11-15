class BuildingsController < ApplicationController

  

    def index
        buildings = Building.all
        render json: buildings, status: :ok
    end

    def show
        building = Building.find(params[:id])
        render json: building, status: :ok
    end

   
end
