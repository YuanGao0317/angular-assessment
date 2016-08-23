var BlogController = function($window, $http, posts){
		var self = this;

		self.posts = posts.data;

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