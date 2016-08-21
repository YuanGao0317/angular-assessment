angular
	.module('app', ['ui.router'])
	.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
            function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/home');

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
				controller: 'BlogController as blog'
			});

		// $locationProvider.html5Mode({
		//   enabled: true,
		//   requireBase: false
		// });
			
	}]);

	//home/templates/views/home.html