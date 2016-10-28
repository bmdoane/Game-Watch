'use strict'

const app = angular.module('Game-Watch', ['ngRoute'])

app.config(function($routeProvider) {

	$routeProvider
	.when('/login', {
		templateURL: 'partials/login.html'
		controller: 'LoginCtrl'
	})
	.when('/register', {
		templateURL: 'partials/register.html'
		controller: 'RegisterCtrl'
	})	
	.when('/myTeam', {
		templateURL: 'partials/myTeam.html'
		controller: 'RegisterCtrl'
	})	
	.when('/nfl', {
		templateURL: 'partials/nfl.html'
		controller: 'NflCtrl'
	})
	.when('/reminder', {
		templateURL: 'partials/reminder.html'
		controller: 'ReminderCtrl'
	})			
	.when('/team', {
		templateURL: 'partials/team.html'
		controller: 'TeamCtrl'
	})
	.otherwise('/login')		
})