class ComputerSerializer < ActiveModel::Serializer
  attributes :id, :asset_tag, :model, :building_id, :serial_number

  has_many :transfers
end
