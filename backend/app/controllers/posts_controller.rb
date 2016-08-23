class PostsController < ApplicationController
	# before_action :get_post, only: [:create]

	def index
		@posts = Post.all
		render json: @posts
	end

	def new

	end

	def create

	end

	private
	def posts_params
		params.require(:post).permit(:title, :content, :image)
	end
end
