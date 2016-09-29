angular
.module('app')
.service("postsModel",function($window, $http){
		var self = this;
		var posts = [];

  	self.storePosts = function(posts) {
  		$window.localStorage.removeItem("posts");
  		$window.localStorage.setItem("posts", JSON.stringify(posts));

  		posts = posts;
	    return posts;
	  };
    

    self.getPosts = function() {
    	var posts = posts;
    	if (posts.length > 0) {
    		return posts;
    	} else {
    		return $window.localStorage.getItem("posts");
    	}
    };

    self.getPost = function(id){
    	var data = $window.localStorage.getItem("posts");
    	var posts = JSON.parse(data);
    	$window.localStorage.removeItem("post");

    	if (posts && posts.length > 0) {
    		for (var i = 0; i < posts.length; i++) {
    			if (posts[i].id == id) {

    				$window.localStorage.setItem("post", JSON.stringify(posts[i]))
    				return posts[i];
    			}
    		}
    	} else {
    		var data = $window.localStorage.getItem("post");
    		return JSON.parse(data);
    	}

    	return false;
    };


    self.uploadComment = function(postId, comment) {
    	var url = "http://localhost:3000/posts/" + postId + "/comments";
    	return $http({
							  method: 'POST',
							  url: url,
							  headers: {
								  'Content-Type': 'application/json',
								  'Accept': 'application/json'
								},
								data: {
									post_id: postId,
									comment: comment
								}
			});
    };

    self.getComments = function(postId) {
    	var url = "http://localhost:3000/posts/" + postId + "/comments";
    	return $http({
    						method: 'GET',
    						url: url,
    						dataType: 'json',
    						data: {
    							post_id: postId
    						}
    	});
    };
	});