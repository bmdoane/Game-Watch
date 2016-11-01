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

	$scope.registerLink = function() {
		if ($location.url() === '/register') {
			return true;
		}
	}

	$scope.myTeamLink = function() {
		if ($location.url() === '/myTeam') {
			return true;
		}
	}

	$scope.reminderLink = function() {
		if ($location.url() === '/reminder') {
			return true;
		}
	}

	$scope.nflLink = function() {
		if ($location.url() === '/nfl') {
			return true;
		}
	}

	$scope.teamLink = function() {
		if ($location.url() === '/team') {
			return true;
		}
	}

})