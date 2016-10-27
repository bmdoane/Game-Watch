'use strict'

const { Router } = require('express')
const router = Router()

const { getReminder, createReminder, deleteReminder, updateReminder } = require('../controllers/reminder')

router.get('/api/user/:userId/reminders', getReminder)
router.post('/api/user/:userId/reminders/create', createReminder)
router.get('/api/user/:userId/reminders/:remindersId/delete', deleteReminder)
router.put('/api/user/:userId/reminders/update', updateReminder)

module.exports = router