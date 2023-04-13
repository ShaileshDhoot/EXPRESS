
const express = require('express')
const router = express.Router()

const importAdmin = require('../controllers/adminControllers');

router.use('/add-product',importAdmin.getAdminControllers)

router.post('/',importAdmin.postAdminControllers)

module.exports = router 