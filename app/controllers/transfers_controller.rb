class TransfersController < ApplicationController

    def create 
        computer = computer.find_by(id: params[:computer_id])
        computer.building_id = params[:to]
        render json: computer, status: :ok
    end
end
