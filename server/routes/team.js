'use strict'

const { Router } = require('express')
const router = Router()

const { getTeamData, getTeamNameData, postTeamToUser } = require('../controllers/team')

router.get('/exApi/getTeamData/:teamId', getTeamData)
router.get('/exApi/getTeamNames', getTeamNameData)
// router.get('/exAPi/getOneTeamName/:teamId', getOneTeamName)
// To add team to user via team.html link
// router.post('/api/user/:id/team', postTeamToUser)

module.exports = router