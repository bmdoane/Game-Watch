'use strict'

const User = require('../models/user')
const mongoose = require('mongoose')
const { get } = require('request')
const dotenv = require('dotenv')
const { MYSPORTSFEEDSSCHEDULE_URL } = process.env


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
	get(MYSPORTSFEEDSSCHEDULE_URL, (err, res, body) => {
		let teamSchedule = []
		let allScheduleInfo = JSON.parse(body),
		{ fullgameschedule } = allScheduleInfo,
		{ lastUpdatedOn, gameentry } = fullgameschedule, // gameentry.length = 256
		games = gameentry

		// How do I call this - may have to return gameentry obj out of this func
		getTeamSeason(games, 80)
	})
}

module.exports.postTeamToUser = (req, res) => {
	// Need to affix team id to teams
	// Click on add button/link
	// team id given as 2nd arg to getSeason()
	// getTeamData()
	// 
} 