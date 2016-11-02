'use strict'

app.factory('TeamsFactory', function($q, $http, $routeParams) {
	// Return a team schedule
	const getTeamSchedule = () => {
		let teamSchedule = []
		return $q((resolve, reject) => {
			$http.get(`/exApi/getTeamData/${$routeParams.tid}`)
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

	// Return all team names
	const getAllTeamNames = () => {
		let teamNames = []
		return $q((resolve, reject) => {
			$http.get('/exApi/getTeamNames')
			.success((teamObj) => {
				let allTeamNames = teamObj
				Object.keys(allTeamNames).forEach((key) => {
					allTeamNames[key].id = key
					teamNames.push(allTeamNames[key])
				})
				resolve(teamNames)
			})
			.error((error) => {
				reject(error)
			})
		})
	}

	const postTeamToUser = (teamId) => {
		return $q((resolve, reject) => {
			$http.post(`/api/addTeam/${teamId}`)
			.success(() => {
				resolve()
			})
			.error((error) => {
				reject(error)
			})
		})
	}

	return { getAllTeamNames, getTeamSchedule }

})