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
				resolve:{
					posts: function (BlogService) {
				    return BlogService.getPosts();
					}
				}
			})
			.state('detail', {
				url: '/post/:id',
				templateUrl: 'post/templates/views/post.html',
				controller: 'PostController as post'
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
			
	}]);

	//home/templates/views/home.html