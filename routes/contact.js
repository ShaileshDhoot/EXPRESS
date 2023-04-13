const  path = require('path')
const express = require('express')
const rootDir = require('../util/path')
const router = express.Router()

router.use('/contact',(req,res,next)=>{
    res.sendFile(path.join(rootDir, 'views', 'contact.html'))   
})

router.post('/success',( req,res,next)=>{  
   // console.log('post od contact us is working')
    res.redirect('/success');
   
})
module.exports = router
