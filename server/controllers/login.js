"use strict"

const User = require('../models/user')

module.exports.userLogin = (req, res, err) => {
  User.findOne({email: req.body.email})
    .then((user) => {
      if (user) {
        if (user.password === req.body.password) {
          console.log("you are logged in!")
          req.session.user = user
          res.json(user)
        } else {
          console.log("passwords didn't match")
        }  
      } else {
        console.log("user doesn't exist")
      }
    })
  } 
