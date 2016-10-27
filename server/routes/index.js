'use strict'

const { Router } = require('express')
const router = Router()

const login = require('./login')
const register = require('./register')
const myTeams = require('./myTeams')
const reminder = require('./reminder')
const team = require('./team')

router.use(login)
router.use(register)

// login guard middleware - guard between public and private routes
// router.use((req, res, next) => {
//   if (req.session.email) {
//     next()
//   } else {
//     res.redirect('/login')
//   }
// })

router.use(myTeams)
router.use(reminder)
router.use(team)

module.exports = router