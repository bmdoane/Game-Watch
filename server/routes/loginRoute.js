'use strict'

const router = require('express').Router()
// require login ctrl

router.get('/login', loginFunc)

module.exports = router
