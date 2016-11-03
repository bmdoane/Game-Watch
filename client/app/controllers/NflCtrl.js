'use strict'

app.controller('NflCtrl', function($scope, TeamsFactory) {
	
	TeamsFactory.getAllTeamNames()
		.then((nameCollection) => {
			const compare = (a, b) => {
				if (a.tid < b.tid) {
					return -1
				}
				if (a.tid > b.tid) {
			    return 1
				}
			  return 0
			}
			nameCollection = nameCollection.sort(compare)
			$scope.teamNames = nameCollection
		})		
})