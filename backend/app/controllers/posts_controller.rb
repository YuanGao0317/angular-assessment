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
		byebug
		# @post = Post.create(posts_params)
		
	end

	private
	def posts_params
		params.require(:post).permit(:title, :content, :category_id, :category_name, :image_file)
	end
end
