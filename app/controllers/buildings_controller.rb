class BuildingsController < ApplicationController

    def index
        buildings = Building.all
        render json: buildings, status: :ok
    end

    def show
        building = Building.find(params[:id])
        render json: building, status: :ok
    end

    def create
        building = Building.create(building_params)
        render json: building, status: :created
    end

    def destroy
        building = Building.find(params[:id])
        building.destroy
        head :no_content
    end
   

    private

    def building_params
        params.permit(:name, :code)
    end
end
