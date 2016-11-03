'use strict'

app.factory('UserFactory', function($q, $http) {

	const getUserInfo = () => {
		return $http.get(`/api/user`)
	}

	let teamSchedule = []
	const getTeam = (teamId) => {
		return $q((resolve, reject) => {
			$http.get(`/exApi/getTeamData/${teamId}`)
			.success((teamObj) => {
				let teamGames = teamObj
				Object.keys(teamGames).forEach((key) => {
					teamGames[key].id = key
					teamSchedule.push(teamGames[key])
				})
				resolve(teamSchedule)
			})
			.error((error) => {
				reject(error)
			})
		})
	}

	const getCurrentDate = () => {
		let today = new Date();
		let day = today.getDate();
		let month = today.getMonth()+1; //January is 0!
		let year = today.getFullYear();

		if(day<10) {
		    day='0'+day
		} 

		if(month<10) {
		    month='0'+month
		} 

		today = `${year}-${month}-${day}`
		return today
	}

	return { getUserInfo, getTeam, getCurrentDate }

})