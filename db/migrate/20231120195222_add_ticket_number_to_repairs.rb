class AddTicketNumberToRepairs < ActiveRecord::Migration[7.0]
  def change
    add_column :repairs, :ticket_number, :integer

  end
end
