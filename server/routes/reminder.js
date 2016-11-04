'use strict'

const { Router } = require('express')
const router = Router()

const { getReminder, createReminder, deleteReminder, updateReminder } = require('../controllers/reminder')

// // Done
// router.get('/api/user/:userId/reminders', getReminder)
// router.get('/api/user/:userId/reminders/:reminderId/delete', deleteReminder)
// // Todo
router.put('/api/user/:userId/reminders/create', createReminder)
// router.put('/api/user/:userId/reminders/update', updateReminder)

module.exports = router