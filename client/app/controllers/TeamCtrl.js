'use strict'

app.controller('TeamCtrl', function($scope, TeamsFactory, $routeParams, $location) {

	$scope.teamName = $routeParams.teamName

	TeamsFactory.getTeamSchedule($routeParams.tid)
	.then((scheduleCollection) => {
		$scope.schedule = scheduleCollection
	})

	$scope.addTeamToUser = () => {
		TeamsFactory.updateTeamToUser($routeParams.tid)
		.then((userObj) => {
			console.log("userObj", userObj)
			$location.url('/myTeam')
		})
	}
	
})