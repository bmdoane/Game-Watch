'use strict'

app.controller('TeamCtrl', function($scope, TeamsFactory, $routeParams, $location) {

	$scope.teamName = $routeParams.teamName

	TeamsFactory.getTeamSchedule($routeParams.tid)
		.then((scheduleCollection) => {
			console.log("scheduleCollection", scheduleCollection);
			$scope.schedule = scheduleCollection
		})

	$scope.addTeamToUser = () => {
		// $location.url('/myTeam')
	}
	
})