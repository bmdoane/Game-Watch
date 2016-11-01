'use strict'

app.controller('NavCtrl', function($scope, $http, $location) {

	$scope.logout = () => {
		console.log("cluck")
		$http.get('/api/logoutUser')
			.then(() =>
				$location.path('/')
			)
	}	

})