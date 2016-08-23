class PostsController < ApplicationController
	# before_action :get_post, only: [:create]

	def index
		@posts = Post.all
		render json: @posts
	end

	def new
		@post = Post.new
	end

	def create
		@post = Post.new(post_params)
		base64_image = Base64.encode64(params[:post][:image])
		@post.image = "data:image/jpg;base64," + base64_image
		byebug
		p.save!
	end

	private
	def posts_params
		params.require(:post).permit(:title, :content, :category_id, :category_name)
	end
end
