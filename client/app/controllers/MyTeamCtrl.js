'use strict'

app.controller('MyTeamCtrl', function($scope, $http, UserFactory, TeamsFactory, $timeout) {

	$scope.team = null

	$timeout(function() {
		UserFactory.getUserInfo()
		.then((userInfo) => {
			console.log("userInfo.data", userInfo.data)
			$scope.user = userInfo.data

			UserFactory.getTeam($scope.user.teamId)
			.then((teamInfo) => {
				console.log("teamInfo", teamInfo)
				$scope.team = teamInfo


				$scope.urCity = ''
				$scope.urTeam = ''
				if ($scope.team[0].awayTeam.ID === $scope.user.teamId) {
					$scope.urCity = $scope.team[0].awayTeam.City
				} else if ($scope.team[0].homeTeam.ID === $scope.user.teamId) {
					$scope.urCity = $scope.team[0].homeTeam.City
				}

				if ($scope.team[0].awayTeam.ID === $scope.user.teamId) {
					$scope.urTeam = $scope.team[0].awayTeam.Name
				} else if ($scope.team[0].homeTeam.ID === $scope.user.teamId) {
					$scope.urTeam = $scope.team[0].homeTeam.Name
				}		
			})
		
		})
	}, 50);	

	// Logic self updates gamedate
	$scope.setReminder = () => {
		let nextGame = $scope.team.filter((game) => {
			return game.date >= $scope.today
		})[0]
		// Super cool [0] returns the first object in array!!
		$http.post('/api/updateUser', nextGame)
	}

	$scope.today = UserFactory.getCurrentDate()
	console.log("$scope.today", $scope.today)


})