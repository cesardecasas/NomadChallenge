class Coach < ApplicationRecord
    has_many :day
    has_many :availability
end
