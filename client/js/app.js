angular
	.module('app', ['ui.router'])
	.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', 
            function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/home');
    $httpProvider.useApplyAsync(true);

		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: 'home/templates/views/home.html',
				controller: 'HomeController as home'
			})
			.state('resume', {
				url: '/resume',
				templateUrl: 'resume/templates/views/resume.html',
				controller: 'ResumeController as resume'
			})
			.state('portfolio', {
				url: '/portfolio',
				templateUrl: 'portfolio/templates/views/portfolio.html',
				controller: 'PortfolioController as portfolio'
			})
			.state('blog', {
				url: '/blog',
				templateUrl: 'blog/templates/views/blog.html',
				controller: 'BlogController as blog',
				resolve: {
					posts: function (BlogService) {
				    return BlogService.getPosts();
					},
					categories: function(BlogService) {
						return BlogService.getCategories();
					}
				}
			})
			.state('postdetail', {
				url: '/posts/:id',
				templateUrl: 'post/templates/views/post.html',
				controller: 'PostController as postdetail',
				resolve: {
					comments: function(postsModel, $stateParams) {
						return postsModel.getComments($stateParams.id);
					}
				}
			})
			.state('newpost', {
				url: '/post/new',
				templateUrl: 'post/templates/views/newPost.html',
				controller: 'NewPostController as newPost'
			})
			.state('login', {
				url: '/users/login',
				templateUrl: 'users/templates/views/login.html',
				controller: 'UsersController as users'
			})
			.state('signup', {
				url: '/users/signup',
				templateUrl: 'users/templates/views/signup.html',
				controller: 'UsersController as users'
			});

		// $locationProvider.html5Mode({
		//   enabled: true,
		//   requireBase: false
		// });
			
	}])
	.factory('GlobalFactory', function() {
    return {
        formatDate: function(date) {
		    	return new Date(date).toGMTString().replace('GMT', 'UTC');
		    }
    };
	})
	// .service("postsModel",function($window, $http){
	// 	var self = this;
	// 	var posts = [];

 //  	self.storePosts = function(posts) {
 //  		$window.localStorage.removeItem("posts");
 //  		$window.localStorage.setItem("posts", JSON.stringify(posts));

 //  		posts = posts;
	//     return posts;
	//   };
    

 //    self.getPosts = function() {
 //    	var posts = posts;
 //    	if (posts.length > 0) {
 //    		return posts;
 //    	} else {
 //    		return $window.localStorage.getItem("posts");
 //    	}
 //    };

 //    self.getPost = function(id){
 //    	var data = $window.localStorage.getItem("posts");
 //    	var posts = JSON.parse(data);
 //    	$window.localStorage.removeItem("post");

 //    	if (posts && posts.length > 0) {
 //    		for (var i = 0; i < posts.length; i++) {
 //    			if (posts[i].id == id) {

 //    				$window.localStorage.setItem("post", JSON.stringify(posts[i]))
 //    				return posts[i];
 //    			}
 //    		}
 //    	} else {
 //    		var data = $window.localStorage.getItem("post");
 //    		return JSON.parse(data);
 //    	}

 //    	return false;
 //    };


 //    self.uploadComment = function(postId, comment) {
 //    	var url = "http://localhost:3000/posts/" + postId + "/comments";
 //    	return $http({
	// 						  method: 'POST',
	// 						  url: url,
	// 						  headers: {
	// 							  'Content-Type': 'application/json',
	// 							  'Accept': 'application/json'
	// 							},
	// 							data: {
	// 								post_id: postId,
	// 								comment: comment
	// 							}
	// 		});
 //    };

 //    self.getComments = function(postId) {
 //    	var url = "http://localhost:3000/posts/" + postId + "/comments";
 //    	return $http({
 //    						method: 'GET',
 //    						url: url,
 //    						dataType: 'json',
 //    						data: {
 //    							post_id: postId
 //    						}
 //    	});
 //    };
	// });

	//home/templates/views/home.html