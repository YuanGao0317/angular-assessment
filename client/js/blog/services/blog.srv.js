function BlogService($http) {
    this.getPosts = function() {
    	return $http({
			  method: 'GET',
			  url: 'http://localhost:3000/posts',
			  dataType: 'json'
			});
    };

    this.getCategories = function() {
    	return $http({
			  method: 'GET',
			  url: 'http://localhost:3000/categories',
			  dataType: 'json'
			});
    };
}

angular
	.module('app')
	.service('BlogService', BlogService);