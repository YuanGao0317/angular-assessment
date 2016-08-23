class PostsController < ApplicationController
	# before_action :get_post, only: [:create]

	def index
		@posts = Post.all
		respond_to do |format|
      format.html { render :index }
      format.json { render json: @posts }
    end
	end

	def new
		@post = Post.new
	end

	def create

	end

	private
	def posts_params
		params.require(:post).permit(:title, :content, :image)
	end
end
