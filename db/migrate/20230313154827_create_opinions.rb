class CreateOpinions < ActiveRecord::Migration[6.1]
  def change
    create_table :opinions do |t|
      t.string :comment
      t.belongs_to :user, foreign_key: true
      t.belongs_to :match, foreign_key: true
      t.timestamps
    end
  end
end
