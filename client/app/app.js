'use strict'

const app = angular.module('GameWatch', ['ngRoute'])

app.config(function($routeProvider) {

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
		controller: 'RegisterCtrl'
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
})