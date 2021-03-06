'use strict'

const User = require('../models/user')
const mongoose = require('mongoose')
const { get } = require('request')
// const { sendSms } = require('../twilioUser')
// Heroku deployment interferes with use of dotenv
const dotenv = require('dotenv')
// This now happens through Heroku
const { MYSPORTSFEEDSSCHEDULE_URL } = process.env


const getTeamSeason = (arr, value) => {
  let season = []

  arr.forEach((obj) => {
  	if (obj.awayTeam.ID === value.toString() || obj.homeTeam.ID === value.toString()) {
  		season.push(obj)
  	} 
  })
  return season? season : null // or undefined
}

module.exports.getTeamData = (req, res) => {
	let teamId = req.params.teamId
	get(MYSPORTSFEEDSSCHEDULE_URL, (err, response, body) => {

		let allScheduleInfo = JSON.parse(body),
		{ fullgameschedule } = allScheduleInfo,
		{ lastUpdatedOn, gameentry } = fullgameschedule, // gameentry.length = 256
		games = gameentry

		let teamSeason = getTeamSeason(games, teamId)

		res.json(teamSeason)
	})
}

// Build team object with full name and id
const teamNameData = (arr) => {
	let cities = []
	let names = []
	let teamId = []
	let teamNames = []
  arr.forEach((obj) => {
  	if (obj.date === "2016-09-08") {
  		teamId.push(obj.awayTeam.ID)
  		teamId.push(obj.homeTeam.ID)  		  		 		
  		cities.push(obj.awayTeam.City)
  		cities.push(obj.homeTeam.City)
  		names.push(obj.awayTeam.Name)
  		names.push(obj.homeTeam.Name)
  	} else if (obj.date === "2016-09-11") {
  		teamId.push(obj.awayTeam.ID)
  		teamId.push(obj.homeTeam.ID)  		
  		cities.push(obj.awayTeam.City)
  		cities.push(obj.homeTeam.City)  		 		
  		names.push(obj.awayTeam.Name)
  		names.push(obj.homeTeam.Name) 		 		
  	} else if (obj.date === "2016-09-12") {
  		teamId.push(obj.awayTeam.ID)
  		teamId.push(obj.homeTeam.ID)  		
  		cities.push(obj.awayTeam.City)
  		cities.push(obj.homeTeam.City)  		 		
  		names.push(obj.awayTeam.Name)
  		names.push(obj.homeTeam.Name)  		  		
  	}
  })

  for (var i = cities.length - 1; i >= 0; i--) {
  	teamNames.push({team: `${cities[i]} ${names[i]}`, tid: `${teamId[i]}`})
  }

  return teamNames? teamNames : null 
}

// Returning all team names
module.exports.getTeamNameData = (req, res) => {
	get(MYSPORTSFEEDSSCHEDULE_URL, (err, response, body) => {
		let dateData = []
		let allScheduleInfo = JSON.parse(body),
		{ fullgameschedule } = allScheduleInfo,
		{ lastUpdatedOn, gameentry } = fullgameschedule,
		games = gameentry
		let teamNames = teamNameData(games)
		res.json(teamNames)
	})
}
