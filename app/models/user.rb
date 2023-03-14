class User < ApplicationRecord
    has_secure_password

    has_many :matches, dependent: :destroy
    has_many :opinions, dependent: :destroy
    has_many :match_opinions, through: :opinions, source: :match

    validates :username, presence: true, uniqueness: true
    validates :age, :location, :favorite_club, presence: true
end
