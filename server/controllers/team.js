'use strict'

const User = require('../models/user')
const mongoose = require('mongoose')
const { get } = require('request')
const dotenv = require('dotenv')
const { MYSPORTSFEEDSSCHEDULE_URL } = process.env


module.exports.getTeamSchedule = (req, res) => {
	get(MYSPORTSFEEDSSCHEDULE_URL, (err, res, body) => {
		let teamSchedule = []
		let allScheduleInfo = JSON.parse(body),
		{ fullgameschedule } = allScheduleInfo,
		{ lastUpdatedOn, gameentry } = fullgameschedule  // gameentry.length = 256

		let filterByTeam = (obj) => {
				if (obj.awayTeam.ID === "69" || obj.homeTeam.ID === "69") {
					return true
				} 
		}

		let newList = gameentry.filter(filterByTeam)
		console.log("newList", newList);
	

})
}

module.exports.addTeamToUserFunc = (req, res) => {
	
} 