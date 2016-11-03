'use strict'

app.factory('UserFactory', function($q, $http) {

	const getUserInfo = () => {
		return $http.get(`/api/user`)
	}

	return { getUserInfo }

})