'use strict'

app.controller('LoginCtrl', function($scope, $http, $location){
	$scope.title = "Login"

	$scope.login = () => {
		const user = {
			email: $scope.email,
			password: $scope.password
		}

		// Post to backend
		$http.post('/api/login', user)
			.then(() => {
				$location.path('/myTeam')
			})
	}

})