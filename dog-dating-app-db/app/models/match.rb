class Match < ApplicationRecord

    
    has_many :locations
    has_many :pets, through: :location

end
