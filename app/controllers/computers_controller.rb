class ComputersController < ApplicationController

    def index
        computers = Computer.all
        render json: computers, status: :ok
    end

    def show
        computer = Computer.find(params[:id])
        render json: computer, status: :ok
    end

    def create 
        computer = Computer.create(computer_params)
        render json: computer, status: :created
    end

    def destroy
        computer = Computer.find(params[:id])
        computer.destroy
        head :no_content
    end


    private
    
    def computer_params
        params.permit(:asset_tag, :model, :building_id, :serial_number, :checkout_status)
    end
end
