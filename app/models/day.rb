class Day < ApplicationRecord
    belongs_to :coach
    has_many :availability
end
