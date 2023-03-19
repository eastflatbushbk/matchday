class AddImgUrlToMatches < ActiveRecord::Migration[6.1]
  def change
    add_column :matches, :hometeam_img_url, :string
    add_column :matches, :awayteam_img_url, :string
  end
end
