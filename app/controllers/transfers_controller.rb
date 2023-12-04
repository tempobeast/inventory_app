class TransfersController < ApplicationController

    def create 
        transfer = Transfer.create(transfer_params)
        computer = Computer.find(transfer[:computer_id])
        old_building = computer.building
        new_building = Building.find_by(code: transfer[:to])
        computer.update(building_id: new_building[:id])
        render json: [old_building, new_building], status: :ok
    end

    private 

    def transfer_params 
        params.permit(:to, :from, :computer_id, :transfer_type)
    end
end
