class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :age, :location, :favorite_club
end
