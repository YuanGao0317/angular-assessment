var UsersController = function($http, $window, $location){
	this.login = function(){
		$http({
		  method: 'POST',
		  url: 'http://localhost:3000/users/sign_in',
		  dataType: 'json'
		}).then(function successCallback(response) {
		    if (response.status === 200) {
		    	$window.sessionStorage.setItem("userLoggedIn", true);
		    	$location.path( "/blog" );
		    }
		  }, function errorCallback(response) {
		    $localStorage.userLoggedIn = false;
		  });
	};

	this.signup = function(){
		$http({
		  method: 'POST',
		  url: 'http://localhost:3000/users',
		  dataType: 'json'
		}).then(function successCallback(response) {
		    if (response.status === 200) {
		    	$location.path( "/users/login" );
		    }
		  }, function errorCallback(response) {
		    
		  });
	};
}

angular
	.module('app')
	.controller('UsersController', UsersController);