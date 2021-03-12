class User < ApplicationRecord

    has_many :pets

    has_secure_password
end
