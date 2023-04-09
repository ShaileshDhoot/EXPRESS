const http = require('http')

const express = require('express')

const app = express()

app.use((req,res,next)=>{
    console.log('middleware')
    next()
})

app.use((req,res,next)=>{
    console.log('second middleware')
    res.send('<h1> hello to node js </h1>')
    // res.send({name: 'shailesh'})
})

// const server = http.createServer(app)

// server.listen(3000)

app.listen(3000)
