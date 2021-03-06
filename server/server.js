'use strict'

const express = require('express')
const session = require('express-session')
const RedisStore = require('connect-redis')(session)
const request = require('request')
const mongoose = require('mongoose')
const { json } = require('body-parser')
const User = require('./models/user')
const { reminderJob } = require('./utilities/chron')
// API key protection
// Heroku not using this!
const dotenv = require('dotenv').config()
// dotenv.load()
const routes = require('./routes/')
const { connect } = require('./db/database')

// Instatiate app
const app = express()
// PORT comes from Heroku when deployed
const PORT = process.env.PORT || 3000
app.set('PORT', PORT)


// Middlewares
app.use(session({
	store: new RedisStore({
    url: process.env.REDIS_URL || "redis://localhost:6379",
  }),
	secret: 'gamewatchsecret',
  resave: false,
  saveUninitialized: true
}))

app.use((req, res, next) => {
	app.locals.email = req.session && req.session.email
	next()
})

app.use(express.static('client'))
// Listens for form data and renders req.body object
//app.use(urlencoded({ extended: false }))
app.use(json())

// Routes
app.use(routes)

// Create User in MongoDB
app.post('/api/newUser', (req, res, err) => {
	User
		.create(req.body)
		.then(user => res.json(user))
		.catch(err)
})

// Read User in MongoDB
// app.get('/api/getUser/:id', (req, res, err) => {
// 	let userId = req.params.id

// 	User
// 		.findById(userId)
// 		.then((user) => {
// 			console.log("Got user", user);
// 			res.json(user)
// 		})
// 		.catch(err)
// })

// Delete User in MongoDB
app.get('/api/deleteUser/:id', (req, res, err) => {
	// Testing in Postman with - localhost:3000/api/deleteUser/580e2d78f9ba2d77549e62b9  (id of user in mongoDB)
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
app.put('/api/updateUser/:teamId', (req, res, err) => {
	let userId = {
		_id: req.session.uid
	}
	let teamId = req.params.teamId
	console.log("userId", userId)
	console.log("teamId", teamId)
		// Investigate $push - {$push {teams: team}} for mulitple
	User
		.findOneAndUpdate(userId, { $set: {
			teamId: teamId
		}}, {upsert:true, new: true})
		// This should return the updated user
		.then((user) => {
			console.log("Updated user", user)
			res.json(user)
		})
})

app.post('/api/updateUser', (req, res, err) => {
	let userId = {
		_id: req.session.uid
	}
	// console.log("req.body", req.body);
	User
		.findOneAndUpdate(userId, { $set: {
			reminderTime: req.body.time
		}}, {upsert:true, new: true})
		// This should return the updated user
		.then((user) => {
			console.log("Updated user", user)
			res.json(user)
		})
})

app.use('/api', (req, res) =>
  res.status(404).send({ code: 404, status: 'Not Found' })
)

// Refresh with html5 routing
// app.use((req, res) =>
//   res.sendFile(process.cwd() + '/client/index.html')
// )

// Listen
connect()
	.then(() =>
		app.listen(PORT, () => {
			console.log(`Listening on port: ${PORT}`)
			// Calling start of chron operation
			reminderJob.start()
		})
	)
	.catch(console.error)