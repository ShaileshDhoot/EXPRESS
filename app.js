const http = require('http')

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
// app.use(bodyParser.json())

app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="text" name="quantity"><button type="submit">Add Product</button></form>')   
})

// app.use('/product',( req,res,next)=>{            // having issue with output in console--->[Object: null prototype]
//     console.log(req.body);
//     res.redirect('/');
// })
// app.get('/product',( req,res,next)=>{  //only get the /product page
//     console.log(req.body);
//     res.redirect('/');
// })
app.post('/product',( req,res,next)=>{      // works same as use method , but if we go to /product , it wont redirect
    console.log(req.body);
    res.redirect('/');
})

app.use('/',(req,res,next)=>{
    res.send('<h1> Hello to Express </h1>')   
})

app.listen(3000)
