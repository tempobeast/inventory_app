class CreateComputers < ActiveRecord::Migration[7.0]
  def change
    create_table :computers do |t|
      t.integer :asset_tag
      t.integer :model
      t.integer :building_id
      t.string :serial_number
      t.boolean :checkout_status

      t.timestamps
    end
  end
end
