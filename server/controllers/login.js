"use strict"

const bcrypt = require('bcrypt')
const User = require('../models/user')

module.exports.userLogin = (req, res, err) => {
  User.findOne({email: req.body.email})
    .then((user) => {
      if (user) {
        return new Promise((resolve, reject) => {
          bcrypt.compare(req.body.password, user.password, (err, matches) => {
            if(err) {
              reject(err)
            } else {
              // Putting userID on session to grab for queries
              console.log("user", user);
              req.session.uid = user._id
              req.session.email = user.email
              resolve(matches)
            }
          })
        })
      } else {
        console.log("Password does not match")
      }  
    })
    .then((matches) => {
      if (matches) {
        res.json(matches)
      } else {
        console.log("Email does not exist")
      }
    })
} 