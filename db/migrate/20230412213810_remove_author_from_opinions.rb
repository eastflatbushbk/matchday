class RemoveAuthorFromOpinions < ActiveRecord::Migration[6.1]
  def change
    remove_column :opinions, :author, :string
  end
end
