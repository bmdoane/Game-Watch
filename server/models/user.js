'use strict'

const mongoose = require('mongoose')

// Model (to be refactored) for MongoDB
// Look at flattening game and reminder data by using userId
module.exports = mongoose.model('User', {
		userName: {
			type: String,
			required: true,
			index: { unique: true }
		},
		email: {
			type: String,
			lowercase: true
			// required: true
		},
		password: {
			type: String
			// required: true
		},
		phoneNumber: String,
		// This is the info, not necessarily best way to handle it
		teamId: String,
		teamName: String,
		gameTimes: [String],
		gameDates: [String],
		opponents: [String],
		textTime: String,
		// Same info as gameDates
		textDates: [String]
})