class CommentsController < ApplicationController
	skip_before_action :authenticate_user!, only: [:index, :create]

	def index
		comments = Comment.where(post_id: params[:post_id]) || []
		# byebug
		if comments
			render json: comments
		else
			render json: comments.errors
		end
	end


	def create
		# byebug
		comment = Comment.new(comments_params)
		if comment.save
			render json: comment
		else
			render json: comment.errors
		end
	end


	private
	def comments_params
		params.require(:comment).permit(:username, :content, :created_at, :post_id)
	end
end
