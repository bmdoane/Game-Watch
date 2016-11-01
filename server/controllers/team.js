'use strict'

const User = require('../models/user')
const mongoose = require('mongoose')
const { get } = require('request')
// Heroku deployment interferes with use of dotenv
const dotenv = require('dotenv')
// This now happens through Heroku
const { MYSPORTSFEEDSSCHEDULE_URL } = process.env
console.log("MYSPORTSFEEDSSCHEDULE_URL", MYSPORTSFEEDSSCHEDULE_URL);


const getTeamSeason = (arr, value) => {
  let teamSeason = []

  arr.forEach((obj) => {
  	if (obj.awayTeam.ID === value.toString() || obj.homeTeam.ID === value.toString()) {
  		teamSeason.push(obj)
  	} 
  })
	console.log("teamSeason", teamSeason)
  return teamSeason? teamSeason[0] : null // or undefined
}

module.exports.getTeamData = (req, res) => {
	let teamId = req.params.teamId
	get(MYSPORTSFEEDSSCHEDULE_URL, (err, res, body) => {
		let teamSchedule = []
		let allScheduleInfo = JSON.parse(body),
		{ fullgameschedule } = allScheduleInfo,
		{ lastUpdatedOn, gameentry } = fullgameschedule, // gameentry.length = 256
		games = gameentry

		// How do I call this - may have to return gameentry obj out of this func
		let userTeamSeason = getTeamSeason(games, teamId) // 
		res.json(userTeamSeason)
	})
}

module.exports.postTeamToUser = (req, res) => {
	// Just Id
} 