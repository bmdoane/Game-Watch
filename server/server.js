'use strict'

const { json } = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const request = require('request')

// Probably going to move this out - test works
// const { sendSms } = require('./twilioUser')

// API key protection
const dotenv = require('dotenv')
dotenv.load()
const MYSPORTSFEEDSSCHEDULE_URL = process.env.MYSPORTSFEEDSSCHEDULE_URL

const app = express()
const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/gamewatch'
const PORT = process.env.PORT || 3000

app.use(express.static('client'))
app.use(json())

// How can I send this for test
// app.use(sendSMS)

// Model (to be refactored) for MongoDB
// Look at flattening game and reminder data by using userId
const User = mongoose.model('user', {
		userName: String,
		phoneNumber: String,
		teams: [String],
		game: [{
			time: String,
			date: String,
			opponentId: String
		}],
		reminders: [{
			textTime: String,
			textDate: String
		}]
})

// Create User in MongoDB
app.post('/api/newUser', (req, res, err) => {
	// This was thrown in to test twilio text to phone
	// sendSms()
	User
		.create(req.body)
		.then(user => res.json(user))
		.catch(err)
})

// Read User in MongoDB
app.get('/api/getUser/:id', (req, res, err) => {
	let userId = req.params.id

	User
		.findById(userId)
		.then((user) => {
			console.log("Got user", user);
			res.json(user)
		})
		.catch(err)
})

// Delete User in MongoDB
app.get('/api/deleteUser/:id', (req, res, err) => {
	// Testing in Postman with - localhost:3000/api/deleteUser/580e2d78f9ba2d77549e62b9  (id of user in mongoDB)
	// console.log("req", req);
	// console.log("Dreq.body", req.params.id);
	let userId = {
		_id: req.params.id
	}
	User
		.remove(userId, (err, user) => {
			if(err) {
				console.log('User was not deleted')
			} else {
				console.log('User removed')
			}
		})
		.then(() => res.send("User deleted from MongoDB"));
})

// Update User in MongoDB
app.put('/api/updateUser/:id', (req, res, err) => {
	let userId = {
		_id: req.params.id
	}
	User
		.findOneAndUpdate(userId, { $set: {
			username: req.body.username,
			teams: [req.body.teams]
			// Investigate $push - {$push {teams: team}} for mulitple
			// Would also need to look at deleting certain teams
		}})
		.then(console.log("Updated req.body", req.body))
		.then((user) => {
			console.log("Updated user", user)
			res.json(user)
		})
})

// This logs mysports object
// request(MYSPORTSFEEDSSCHEDULE_URL, (err, res, body) => {
// 	console.log("req.SPORTS", body);
// })

mongoose.Promise = Promise
mongoose.connect(MONGODB_URL, () =>
	app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
)