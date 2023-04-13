
const express = require('express')
const router = express.Router()
const importContact = require('../controllers/contactUsController')
router.use('/contact',importContact.useContactController)

router.post('/success',importContact.postContactController)
module.exports = router
