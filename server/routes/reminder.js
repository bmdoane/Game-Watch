'use strict'

const { Router } = require('express')
const router = Router()

const { getReminder, createReminder, deleteReminder, updateReminder } = require('../controllers/reminder')

// Done
router.get('/api/user/:userId/reminders', getReminder)
// Todo
router.post('/api/user/:userId/reminders/create', createReminder)
router.get('/api/user/:userId/reminders/:reminderId/delete', deleteReminder)
router.put('/api/user/:userId/reminders/update', updateReminder)

module.exports = router