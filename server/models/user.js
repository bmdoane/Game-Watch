'use strict'

const mongoose = require('mongoose')

module.exports = mongoose.model('User', {
	id: String,
	name: String,
	teams: [String]
})