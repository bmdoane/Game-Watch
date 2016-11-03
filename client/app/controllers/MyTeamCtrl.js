'use strict'

app.controller('MyTeamCtrl', function($scope, UserFactory, TeamsFactory) {



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

	$scope.today = UserFactory.getCurrentDate()
	console.log("$scope.today", $scope.today);


})