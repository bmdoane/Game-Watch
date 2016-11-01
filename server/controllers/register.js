'use strict'

const bcrypt = require('bcrypt')
const User = require('../models/user')

module.exports.userRegister = (req, res, err) => {
  User.findOne({email: req.body.email})
    .then(user => {
      if (user) {
        console.log("User exists")
      } else {
        return new Promise((resolve, reject) => {
          console.log("fuck")
          console.log("req.body", req.body);
          // Promise makes sure this resolves before user is created
          bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
              console.log("rejected")
              reject(err)
            } else {
              console.log("resolved")
              console.log("hash", hash);
              resolve(hash)
            }
          })
        })
        .then((hash) => {
          User
            .create({
              email: req.body.email,
              password: hash,
              userName: req.body.userName,
              mobile: req.body.mobile         
            })          
        })
        .then((user) => {
          res.json(user)
        })
        .catch(err)  
      }
    }
)}