'use strict'

router = require('express').Router()
const { regFunc } = require('../controllers/regCtrl')

router.post('/register', registerFunc)

module.exports = router