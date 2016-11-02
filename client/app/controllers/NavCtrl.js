'use strict'

app.controller('NavCtrl', function($scope, $http, $location) {

	$scope.logout = () => {
		$http.get('/api/logoutUser')
			.then(() =>
				$location.path('/')
			)
	}	

	$scope.loginLink = function() {
		if ($location.url() === '/') {
			return true;
		}
	}

	// Includes better option than ===, fixed bug
	$scope.registerLink = function() {
		if ($location.url().includes('/register')) {
			return true;
		}
	}

	$scope.myTeamLink = function() {
		if ($location.url().includes('/myTeam')) {
			return true;
		}
	}

	$scope.reminderLink = function() {
		if ($location.url().includes('/reminder')) {
			return true;
		}
	}

	$scope.nflLink = function() {
		if ($location.url().includes('/nfl')) {
			return true;
		}
	}

	$scope.teamLink = function() {
		if ($location.url().includes('/team')) {
			return true;
		}
	}

})