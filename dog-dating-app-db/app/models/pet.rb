class Pet < ApplicationRecord

    belongs_to :user

    has_many :locations 
    has_many :matches, through: :locations  

end
