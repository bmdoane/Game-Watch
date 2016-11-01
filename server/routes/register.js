'use strict'

const { Router } = require('express')
const router = Router()

const regCtrl = require('../controllers/register')

router.post('/api/register', regCtrl.userRegister)

module.exports = router