'use strict'

const router = require('express').Router()
const { userLogin } = require('../controllers/login')

router.get('/login', userLogin)

module.exports = router
