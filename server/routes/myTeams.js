'use strict'

const { Router } = require('express')
const router = Router()

const { getUser, getSpecificName, getReminderFunc } = require('../controllers/myTeams')

router.get('/api/user', getUser)
// router.get('/exApi/userTeam/:teamId', getSpecificName) // can't have two func on smae route
// router.get('/exApi/opponent', getTDOFunc)
// router.get('/api/user/reminders', getReminderFunc)
// // In theory this delete would clear TDO and reminder.  Or does reminder need separate deleteFunc
// router.post('/api/user/:id', deleteTeamFunc)

module.exports = router