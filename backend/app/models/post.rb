class Post < ActiveRecord::Base
	validates_presence_of :title, :content
	belongs_to :category

	def category_name=(category_name)
		unless category_name.empty?
			category = Category.find_or_create_by(name: category_name)
			category.posts << self
		end
	end

	def category_name
		self.category ? self.category.name : ""
	end
end
