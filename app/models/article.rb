class Article < ApplicationRecord

  has_many :likes,
    primary_key: :id,
    foreign_key: :article_id,
    class_name: 'Like'

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'User'

  has_many :comments,
    primary_key: :id,
    foreign_key: :article_id,
    class_name: 'Comment'



end
