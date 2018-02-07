class Article < ApplicationRecord

  belongs_to :like,
    primary_key: :id,
    foreign_key: :article_id,
    class_name: 'Like'

    
end
