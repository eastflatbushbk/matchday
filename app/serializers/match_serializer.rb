class MatchSerializer < ActiveModel::Serializer
  attributes :id, :game, :home_team, :away_team, :home_score, :away_score, :user_id, :hometeam_img_url, :awayteam_img_url, :author 
  has_many :opinions

  def author
    {
     
      username: object.author.username,
      
    }
  end
end
