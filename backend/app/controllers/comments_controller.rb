class CommentsController < ApplicationController
	skip_before_action :authenticate_user!, only: [:create]
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
