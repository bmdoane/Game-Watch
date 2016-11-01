'use strict'

const User = require('../models/user')

module.exports.userRegister = (req, res, err) => {
  User.findOne({email: req.body.email})
    .then(userObj => {
      if (userObj) {
        console.log("User exists")
      } else {
        User
          .create({
            email: req.body.email,
            password: req.body.password,
            userName: req.body.userName,
            mobile: req.body.mobile         
          })
          .then((user) => {
            res.json(user)
          })
          .catch(err)  
      }
    }
)}