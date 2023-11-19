class CreateTransfers < ActiveRecord::Migration[7.0]
  def change
    create_table :transfers do |t|
      t.integer :from
      t.integer :to
      t.string :type
      t.integer :computer_id

      t.timestamps
    end
  end
end
