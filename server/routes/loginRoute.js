'use strict'

const router = require('express').Router()
const { loginFunc } = require('../controllers/loginCtrl')

router.get('/login', loginFunc)

module.exports = router
