'use strict'

const { Router } = require('express')
const router = Router()

const { getTeamSchedule, addTeamToUserFunc } = require('../controllers/team')

router.get('/exApi/user/getTeamSchedule', getTeamSchedule)
// router.post('/api/user/:id', addTeamToUserFunc)

module.exports = router