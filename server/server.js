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

// With model and post able to create user to mongodb via postman
// Investigate teams being an array of objects
const User = mongoose.model('user', {
		username: String,
		teams: [String]
})

app.post('/api/newUser', (req, res, err) => {
	console.log("req.body", req.body)
	User
		.create(req.body)
		.then(user => res.json(user))
		.catch(err)
})

app.get('/api/deleteUser/:id', (req, res, err) => {
	// Testing in Postman with - localhost:3000/api/deleteUser/580e2d78f9ba2d77549e62b9  (id of user in mongoDB)
	console.log("req", req);
	console.log("Dreq.body", req.params.id);

})

// This logs mysports object
// request(MYSPORTSFEEDSSCHEDULE_URL, (err, res, body) => {
// 	console.log("req.SPORTS", body);
// })

mongoose.Promise = Promise
mongoose.connect(MONGODB_URL, () =>
	app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
)