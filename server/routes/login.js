'use strict'

const router = require('express').Router()
const logCtrl = require('../controllers/login')

router.post('/api/login', logCtrl.userLogin)

module.exports = router
