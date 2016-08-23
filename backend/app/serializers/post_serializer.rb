class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :image_base64
end
