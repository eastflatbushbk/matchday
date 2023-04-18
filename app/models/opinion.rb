class Opinion < ApplicationRecord
    belongs_to :user
    belongs_to :match
    validates :comment, length: { minimum: 2 }
end
