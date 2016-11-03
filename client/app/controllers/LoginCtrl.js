'use strict'

app.controller('LoginCtrl', function($scope, $http, $location){
	$scope.title = "Login"

	$scope.login = () => {
		const user = {
			email: $scope.email,
			password: $scope.password
		}

		// Post to match server route
		// Posting route not returning promise - post should not return anything
		// How do I resolve the promise??
		$http.post('/api/login', user)
			.then(() => {
				$location.path('/myTeam')
			})
	}

})