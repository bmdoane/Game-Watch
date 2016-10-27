'use strict'

const { Router } = require('express')
const router = Router()

const { getReminderFunc, createReminderFunc, deleteReminderFunc, updateReminderFunc } = require('../controllers/reminder')

// router.get('/api/user/reminders', getReminderFunc)
// router.post('/api/user/reminders/create', createReminderFunc)
// router.get('/api/user/reminders/delete', deleteReminderFunc)
// router.put('/api/user/reminders/update', updateReminderFunc)

module.exports = router