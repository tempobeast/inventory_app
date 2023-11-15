class ComputersController < ApplicationController

    def index
        computers = Computer.all
        render json: computers, status: :ok
    end

    def show
        computer = Computer.find(params[:id])
        render json: computer, status: :ok
    end

end
