class CreateArticles < ActiveRecord::Migration[5.1]
  def change
    create_table :articles do |t|
      t.string :title
      t.string :body
      t.string :cover_img_url
      t.string :time_length
      t.integer :user_id

      t.timestamps
    end
  end
end
