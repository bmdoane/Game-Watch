'use strict'

const { json } = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const request = require('request')

// API key protection
const dotenv = require('dotenv')
dotenv.load()
const MYSPORTSFEEDSSCHEDULE_URL = process.env.MYSPORTSFEEDSSCHEDULE_URL

const app = express()
const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/gamewatch'
const PORT = process.env.PORT || 3000

app.use(express.static('client'))
app.use(json())

// Model (to be refactored) for MongoDB 
const User = mongoose.model('user', {
		username: String,
		teams: [String]
})

// Create User in MongoDB
app.post('/api/newUser', (req, res, err) => {
	console.log("req.body", req.body)
	User
		.create(req.body)
		.then(user => res.json(user))
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
app.patch('/api/updateUser/:id', (req, res, err) => {
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