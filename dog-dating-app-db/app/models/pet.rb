class Pet < ApplicationRecord

    belongs_to :user, optional: true

    has_many :locations 
    has_many :matches, through: :locations  

end
