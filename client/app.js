var app = angular.module("app", ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: '/partials/login.html',
		controller: 'userController'
	})
	.when('/dashboard', {
		templateUrl: '/partials/dashboard.html',
		controller: 'dashboardController'
	})
	.when('/poll/:id', {
		templateUrl: '/partials/poll.html',
		controller: 'pollController'
	})
	.when('/create/', {
		templateUrl: '/partials/create.html',
		controller: 'createController'
	})
	.otherwise({
		redirectTo: '/'
	})
})
