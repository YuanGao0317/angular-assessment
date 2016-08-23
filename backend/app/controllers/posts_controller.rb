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
	end

	private
	def posts_params
		params.require(:post).permit(:title, :content, :image, :category_id, :category_name)
	end
end
