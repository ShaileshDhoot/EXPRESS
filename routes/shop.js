
const express = require('express')
const router = express.Router()


router.get('/',require('../controllers/shopController'))
module.exports = router