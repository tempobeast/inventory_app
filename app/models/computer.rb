class Computer < ApplicationRecord
    belongs_to :building
    has_many :transfers
end
