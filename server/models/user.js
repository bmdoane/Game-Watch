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
		teamId: String,
		textTime: String,
		textDate: [String]
})