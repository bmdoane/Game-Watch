'use strict'

app.controller('TeamCtrl', function($scope, TeamsFactory, $routeParams, $location, $timeout) {

	$scope.teamName = $routeParams.teamName

	$timeout(function() {
		TeamsFactory.getTeamSchedule($routeParams.tid)
		.then((scheduleCollection) => {
			$scope.schedule = scheduleCollection
		})
	}, 50);		

	$scope.addTeamToUser = () => {
		TeamsFactory.updateTeamToUser($routeParams.tid)
		.then((userObj) => {
			console.log("addTTU", userObj)
			$location.url('/myTeam')
		})
	}
	
})