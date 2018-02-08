class Article < ApplicationRecord

  has_many :likes,
    primary_key: :id,
    foreign_key: :article_id,
    class_name: 'Like'


end
