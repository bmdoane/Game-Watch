'use strict'

const mongoose = require('mongoose')

module.exports = mongoose.model('User', {
		userName: {
			type: String,
			required: true
		},
		email: {
			type: String,
			lowercase: true,
			required: true,
			index: { unique: true }
		},
		password: {
			type: String,
			required: true
		},
		mobile: String,
		teamId: String
})