'use strict'

const app = angular.module('GameWatch', ['ngRoute'])

app.config(function($routeProvider, $locationProvider) {

	$routeProvider
	.when('/', {
		templateUrl: 'partials/login.html',
		controller: 'LoginCtrl'
	})
	.when('/register', {
		templateUrl: 'partials/register.html',
		controller: 'RegisterCtrl'
	})	
	.when('/myTeam', {
		templateUrl: 'partials/myTeam.html',
		controller: 'MyTeamCtrl'
	})	
	.when('/nfl', {
		templateUrl: 'partials/nfl.html',
		controller: 'NflCtrl'
	})
	.when('/reminder', {
		templateUrl: 'partials/reminder.html',
		controller: 'ReminderCtrl'
	})			
	.when('/team', {
		templateUrl: 'partials/team.html',
		controller: 'TeamCtrl'
	})
	.otherwise('/')

	// To not prefix URL's with #
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	})		
})