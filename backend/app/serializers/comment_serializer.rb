class CommentSerializer < ActiveModel::Serializer
  attributes :id, :post_id, :username, :content, :created_at
end
