class TransfersController < ApplicationController

    def create 
        byebug
        transfer = Transfer.create(transfer_params)
        computer = Computer.find(transfer[:computer_id])
        byebug
        new_building = Building.find_by(code: transfer[:to])
        computer.update(building_id: new_building[:id])
        byebug
        render json: computer, status: :ok
    end

    private 

    def transfer_params 
        params.permit(:to, :from, :computer_id, :transfer_type)
    end
end
