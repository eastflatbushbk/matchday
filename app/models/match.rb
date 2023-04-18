class Match < ApplicationRecord
    has_many :users, dependent: :destroy
    has_many :opinions, dependent: :destroy
    has_many :opinionated_users, through: :opinions, source: :user
    belongs_to :author, class_name: "User", foreign_key: "user_id"

    
    validates :game,presence: true, allow_blank: false
    validates :home_team, presence: true, allow_blank: false
    validates :away_team, presence: true, allow_blank: false
    validates :home_score, presence: true, allow_blank: false
    validates :away_score, presence: true, allow_blank: false
    validates :hometeam_img_url, presence: true, allow_blank: false
    validates :awayteam_img_url, presence: true, allow_blank: false
    validate :check_team_opponent

   def check_team_opponent
       errors.add(:away_team, " cannot play itself, select another team") if home_team == away_team
   end
end
