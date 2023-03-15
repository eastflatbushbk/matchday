class FixColumnName < ActiveRecord::Migration[6.1]
  def change
    rename_column :matches, :matchday, :game
  end
end
