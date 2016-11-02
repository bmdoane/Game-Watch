'use strict'

app.controller('NflCtrl', function($scope, TeamsFactory) {
	
	TeamsFactory.getAllTeamNames()
	.then((nameCollection) => {
		console.log("nameCollection", nameCollection);
		$scope.teamNames = nameCollection
		console.log("teamNames", $scope.teamNames);
		// ng-repeat teamNames but still have id prop
	})		
})