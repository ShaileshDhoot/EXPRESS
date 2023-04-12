const express = require('express')
const router = express.Router()

router.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST" ><input type="text" name="title"><input type="text" name="quantity"><button type="submit">Add Product</button></form>')   
})

router.post('/product',( req,res,next)=>{      // works same as use method , but if we go to /product , it wont redirect
    console.log(req.body);
    res.redirect('/');
})

module.exports = router