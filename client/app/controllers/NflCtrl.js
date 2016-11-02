'use strict'

app.controller('NflCtrl', function($scope, TeamsFactory) {
	
	TeamsFactory.getAllTeamNames()
	.then((nameCollection) => {
		$scope.teamNames = nameCollection
		console.log("teamNames", $scope.teamNames);
	})		
})