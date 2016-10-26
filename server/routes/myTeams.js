'use strict'

const router = require('express').Router()
const { getUserFunc, getUserTeamFunc, getTDOFunc, getReminderFunc } = require('../controllers/myTeamCtrl')

router.get('/api/user/:id', getUserFunc)
router.get('/api/user/:id', getUserTeamFunc)
router.get('/MYSPORTSFEEDSSCHEDULE_URL', getTDOFunc)
router.get('/api/user/reminders', getReminderFunc)
// In theory this delete would clear TDO and reminder.  Or does reminder need separate deleteFunc
router.post('/api/user/:id', deleteTeamFunc)

module.exports = router