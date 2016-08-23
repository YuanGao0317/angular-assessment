class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :image_base64, :created_at
  has_one :category, serializer: CategorySerializer
end
