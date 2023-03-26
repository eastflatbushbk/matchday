class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.integer :age
      t.string :location
      t.string :favorite_club
      t.string :password_digest
      t.integer :match_id
      t.timestamps
    end
  end
end
