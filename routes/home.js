const express = require('express')
const control = require('../controller/get')
const router = express.Router()

router.get('/index.ejs', control.get );

router.post('/admin', control.post)

module.exports = router;