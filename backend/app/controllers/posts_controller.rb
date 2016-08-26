class PostsController < ApplicationController
	# before_action :get_post, only: [:create]
	skip_before_action :authenticate_user!, only: [:index]

	def index
		@posts = Post.all
		render json: @posts
	end

	def new
		@post = Post.new
	end

	def create
		
		@post = Post.create(posts_params)
		# byebug
		base64 = Base64.encode64(params[:post][:image].read)
		@post.image_base64 = base64
		@post.save
		redirect_to root_url, notice: "Post is created!"
	end

	def show
		@post = Post.find(params[:id])
	end

	private
	def posts_params
		params.require(:post).permit(:title, :content, :category_id, :category_name)
	end
end
