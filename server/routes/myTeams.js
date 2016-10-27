'use strict'

const { Router } = require('express')
const router = Router()

const { getUserFunc, getUserTeamFunc, getTDOFunc, getReminderFunc } = require('../controllers/myTeams')

// router.get('/api/user/:id', getUserFunc) // get both here
// router.get('/api/user/:id', getUserTeamFunc) // can't have two func on smae route
// router.get(MYSPORTSFEEDSSCHEDULE_URL, getTDOFunc)
// router.get('/api/user/reminders', getReminderFunc)
// // In theory this delete would clear TDO and reminder.  Or does reminder need separate deleteFunc
// router.post('/api/user/:id', deleteTeamFunc)

module.exports = router