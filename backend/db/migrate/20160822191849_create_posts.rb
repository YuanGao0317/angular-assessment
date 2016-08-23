class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title
      t.text :content
      t.string :category_id
      t.string :image_base64

      t.timestamps null: false
    end
  end
end
