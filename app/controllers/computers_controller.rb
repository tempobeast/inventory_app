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
        byebug
        computer = Computer.create!(computer_params)
        render json: computer, status: :created
    end


    private
    
    def computer_params
        params.permit(asset_tag: params[:asset_tag], building_id: params[:building_id], model: params[:model], serial_number: params[:serial_number], checkout_status: params[:checkout_status])
    end
end
