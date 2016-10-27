'use strict'

const { Router } = require('express')
const router = Router()

const { getTeamScheduleFunc, addTeamToUserFunc } = require('../controllers/team')

// router.get(MYSPORTSFEEDSSCHEDULE_URL, getTeamScheduleFunc)
// router.post('/api/user/:id', addTeamToUserFunc)

module.exports = router