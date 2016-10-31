'use strict'

app.controller('RegisterCtrl', function($scope) {
	console.log("Can you hear register?")		
})

app.controller('RegisterCtrl', function($scope, $http, $location){
	$scope.title = "Welcome!"

	$scope.register = () => {
		// Is this all I need here, or just what I'm sending from here?
		const userModel = {
			email: $scope.email,
			password: $scope.password,
			userName: $scope.userName,
			mobile: $scope.mobile									
		}
		console.log(userModel)
		$http.post('/api/register', userModel)
			.then(() => {
				$location.path('/myTeam')
			})
	}
})
