class CategoriesController < ApplicationController
	skip_before_action :authenticate_user!, only: [:index]
	def index
		@categories = Category.all
		render json: @categories
	end
end
