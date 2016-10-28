'use strict'

const User = require('../models/user')

module.exports.getReminder = (req, res) => {
  User
  	.findById(req.params.userId)
  	.then((user) => {
  		res.json(user.reminders)
  	})
}

module.exports.createReminder = (req, res) => {
	User
  	.findById(req.params.userId)
  	.then((user) => {
  		console.log("user1", user.reminders)
  		user.reminders
  			// .create({textTime: "10:00pm", textDate: "2016-10-27"})
  			// .then((obj) => {
  			// 	console.log("obj", obj);
  			// })
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