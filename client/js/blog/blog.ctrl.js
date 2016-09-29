var BlogController = function($window, posts, categories, postsModel){
		var self = this;

		self.posts = postsModel.storePosts(posts.data);

		self.categories = categories.data;
		self.categories.unshift({name: 'all'});

		self.filteredPosts = self.posts;
		self.filter = "all";

		self.setCategory = function(category) {
        self.filter = category;
    };


    self.categoryFilter = function(post) {

    	if (self.filter.length > 0 && post.category.name == self.filter) {
    		return post;
    	} else if (self.filter.length < 0 || self.filter == 'all') {
    		return post;
    	}

    	return;
    };

}

angular
	.module('app')
	.controller('BlogController', BlogController)
