var BlogController = function($window, posts, categories, postsModel){
		var self = this;
		console.log(posts);


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

    


		// this.userLoggedIn = $window.sessionStorage.getItem("userLoggedIn");

		// this.logout = function(){
		// 	$window.sessionStorage.setItem("userLoggedIn", false);
		// 	this.userLoggedIn = false;
		// 	$http({
		// 	  method: 'DELETE',
		// 	  url: 'http://localhost:3000/users/sign_out',
		// 	  dataType: 'json'
		// 	}).then(function successCallback(response) {

		// 	  }, function errorCallback(response) {
			    
		// 	  });
		// };


}

angular
	.module('app')
	.controller('BlogController', BlogController);