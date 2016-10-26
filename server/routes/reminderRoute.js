'use strict'

const router = require('express').Router()
// require reminderCtrl

router.get('/api/user/reminders', getReminderFunc)
router.post('/api/user/reminders/create', createReminderFunc)
router.get('/api/user/reminders/delete', deleteReminderFunc)
router.put('/api/user/reminders/update', updateReminderFunc)

module.exports = router