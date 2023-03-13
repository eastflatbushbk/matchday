class MatchSerializer < ActiveModel::Serializer
  attributes :id, :matchday, :home_team, :away_team, :home_score, :away_score
end
