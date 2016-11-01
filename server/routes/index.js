'use strict'

const { Router } = require('express')
const router = Router()

const logout = require('./logout')
const login = require('./login')
const register = require('./register')
const myTeams = require('./myTeams')
const reminder = require('./reminder')
const team = require('./team')

router.use(logout)
router.use(login)
router.use(register)
router.use(myTeams)
router.use(reminder)
router.use(team)


module.exports = router