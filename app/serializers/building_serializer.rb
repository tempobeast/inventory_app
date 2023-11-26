class BuildingSerializer < ActiveModel::Serializer
  attributes :id, :name, :code

  has_many :computers
end
