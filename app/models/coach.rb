class Coach < ApplicationRecord
    has_many :day
    has_many :availability
    has_many :appointment
end
