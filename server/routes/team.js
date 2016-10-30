'use strict'

const { Router } = require('express')
const router = Router()

const { getTeamData, postTeamToUser } = require('../controllers/team')

router.get('/exApi/getTeamData', getTeamData)
// To add team to user via team.html link
router.post('/api/user/:id/team', postTeamToUser)

module.exports = router