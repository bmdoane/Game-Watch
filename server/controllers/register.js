'use strict'

const User = require('../models/user')

module.exports.userRegister = (req, res, err) => {
  User.findOne({email: req.body})
    .then(userObj => {
      if (userObj) {
        console.log("User exists")
      } else {
        User
        .create({
          email: req.body.email,
          password: req.body.password,
          userName: req.body.userName,
          mobile: req.body.mobile,
          // Do I need all of this below?
					teamId: req.body.teamId,
					teamName: req.body.teamName,
					gameTimes: req.body.gameTimes,
					gameDates: req.body.gameDates,
					opponents: req.body.opponents,
					textTime: req.body.textTime,
					textDates: req.body.textDates          
        })
        .then(() => {
          res.redirect('/')})
        .catch(err)  
      }
    }
)}