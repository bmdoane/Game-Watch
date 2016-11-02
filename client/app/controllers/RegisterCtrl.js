'use strict'

app.controller('RegisterCtrl', function($scope, $http, $location){
	$scope.title = "Welcome!"

	$scope.register = () => {

		const userModel = {
			email: $scope.email,
			password: $scope.password,
			userName: $scope.userName,
			mobile: $scope.mobile									
		}

		// This has to match server route
		$http.post('/api/register', userModel)
			.then(() => {
				$location.path('/')
			})
	}
})
