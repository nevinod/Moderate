class AddColumnToArticles < ActiveRecord::Migration[5.1]
  def change
    add_column :articles, :user_id, :integer, :null=>false
  end
end
