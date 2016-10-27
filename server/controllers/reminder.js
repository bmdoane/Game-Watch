'use strict'

const User = require('../models/user')

module.exports.getReminder = (req, res) => {
	res.send('Pick it up!')
}

module.exports.createReminder = (req, res) => {
	console.log("req", req);
	res.send('More code to write!')	
}

module.exports.deleteReminder = (req, res) => {
	res.send('It works!')	
}

module.exports.updateReminder = (req, res) => {
	console.log("req.body", req.body);
	res.send('Pizza for lunch!')	
}