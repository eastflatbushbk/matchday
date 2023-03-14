class Match < ApplicationRecord
    has_many :users, dependent: :destroy
    has_many :opinionated_users, through: :opinions, source: :user
    belongs_to :author, class_name: "User", foreign_key: "user_id"
end
