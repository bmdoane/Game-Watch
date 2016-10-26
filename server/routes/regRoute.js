'use strict'

router = require('express').Router()
// require regCtrl

router.post('/register', registerFunc)

module.exports = router