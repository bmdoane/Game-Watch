"use strict"

const { Router } = require('express')
const router = Router()

const logoutCtrl = require('../controllers/logout')

router.get('/api/logoutUser', logoutCtrl.userLogout)

module.exports = router