class ChangeColumnNameToTransferType < ActiveRecord::Migration[7.0]
  def change
    rename_column :transfers, :type, :transfer_type
  end
end
