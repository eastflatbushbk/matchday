class OpinionSerializer < ActiveModel::Serializer
  attributes :id, :comment, :user_id, :username
  belongs_to :match  
  belongs_to :user  
  def username
     object.user.username
  end
end

