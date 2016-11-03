'use strict'

app.controller('MyTeamCtrl', function($scope, UserFactory) {

	UserFactory.getUserInfo()
	.then((userInfo) => {
		console.log("userInfo.data", userInfo.data)
		$scope.user = userInfo.data
	})

})