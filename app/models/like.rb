class Like < ApplicationRecord

  belongs_to :article,
    primary_key: :id,
    foreign_key: :article_id,
    class_name: 'Article'

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'User'


end
