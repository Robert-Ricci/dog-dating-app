class Location < ApplicationRecord
    
    belongs_to :match
    belongs_to :pet 
    

end
