'use strict'

const { Router } = require('express')
const router = Router()

const { userRegister } = require('../controllers/register')

router.post('/register', userRegister)

module.exports = router