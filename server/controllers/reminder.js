'use strict'

const User = require('../models/user')

module.exports.getReminder = (req, res) => {
  User
  	.findById(req.params.userId)
  	.then((user) => {
  		res.json(user.reminders)
  	})
}

// This is not working....
module.exports.createReminder = (req, res) => {
	console.log("2req.params.userId", req.params.userId);
	User
  	.findById(req.params.userId)
  	.then((user) => {
  		console.log("user1", user.reminders)
  		user.reminders
  			.create({
  				textTime: "",
  				textDate: ""
  			})
  			.then((obj) => {
  				console.log("obj", obj);
  			user.save()
  			})
  	})
}

module.exports.deleteReminder = (req, res) => {
	console.log("req.params.reminderId", req.params.reminderId)

	User
  	.findById(req.params.userId)
  	.then((user) => {
  		console.log("user1", user.reminders)
  		user.reminders
  			.pull(req.params.reminderId)
  			user.save()
  			res.end()  // res.send also triggers res.end()
  	})
}

module.exports.updateReminder = (req, res) => {
	console.log("req.body", req.body);
	res.send('Pizza for lunch!')	
}