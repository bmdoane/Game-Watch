'use strict'

const { sendSms} = require('./twilioUser')
const cronJob = require('cron').CronJob
const User = require('../models/user')


module.exports.reminderJob = new cronJob({cronTime: '0 5 * * * *',
  onTick: function() {
	// user.find for these vars, arrray for each user.mobile and message made for user
	let mobiles = {}
	User
		.find()
		.then((userArray) => {
			// console.log("userArray", userArray[0].mobile)
			userArray.forEach((user) => {
				mobiles = user.mobile
				console.log("2userMap", mobiles);			
			})
		})

	sendSms(`16159722717`, `Thanks for coming out to see ourCohort 14 Demo Day!`)
  },
  start: false,
  timeZone: 'America/Chicago'
});