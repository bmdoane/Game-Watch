'use strict'

app.controller('TeamCtrl', function($scope, TeamsFactory, $routeParams) {
	console.log("$routeParams.tid", $routeParams.tid)
	TeamsFactory.getTeamSchedule($routeParams.tid)
		.then((scheduleCollection) => {
			console.log("scheduleCollection", scheduleCollection);
			$scope.schedule = scheduleCollection
		})
	// Use route params team/:id in app.js routes
	// Save id to variable
	// Will send http.get own route params with :id	
	
})