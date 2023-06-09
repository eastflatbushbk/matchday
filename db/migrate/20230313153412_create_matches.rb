class CreateMatches < ActiveRecord::Migration[6.1]
  def change
    create_table :matches do |t|
      t.integer :game
      t.string :home_team
      t.string :away_team
      t.integer :home_score
      t.integer :away_score
      t.integer :user_id
      t.string :hometeam_img_url
      t.string :awayteam_img_url
      t.timestamps
    end
  end
end
