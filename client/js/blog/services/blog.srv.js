function BlogService($http) {
    this.getPosts = function() {
    	return $http({
			  method: 'GET',
			  url: 'http://localhost:3000/posts',
			  dataType: 'json'
			});
    };
}

angular
	.module('app')
	.service('BlogService', BlogService);