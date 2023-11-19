class CreateRepairs < ActiveRecord::Migration[7.0]
  def change
    create_table :repairs do |t|
      t.string :description
      t.integer :computer_id

      t.timestamps
    end
  end
end
