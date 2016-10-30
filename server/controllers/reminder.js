'use strict'

const User = require('../models/user')

// Working
module.exports.getReminder = (req, res) => {
  User
  	.findById(req.params.userId)
  	.then((user) => {
      console.log("user", user)
  		res.json(user)
  	})
}

// This is not working....
module.exports.createReminder = (req, res) => {
	//console.log("2req.params.userId", req.params.userId);
  User
    .findOneAndUpdate({_id: req.params.userId}, {$set: {textTime: req.body.textTime, textDate: req.body.textDate}}, {upsert: true}, (err, newReminder) => {
        if(err) {
          console.log('Error occurred in creating reminder')
        } else {
          console.log("newReminder", newReminder)
          res.sendStatus(204)
        }
      })  
}   

// Working
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