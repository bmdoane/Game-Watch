'use strict'

const router = require('express').Router()
// require teamCtrl

router.get('MYSPORTSFEEDSSCHEDULE_URL', getTeamScheduleFunc)
router.post('/api/user/:id', addTeamToUserFunc)

module.exports = router