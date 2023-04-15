const  path = require('path')

const rootDir = require('../util/path')

const useContactController = (req,res,next)=>{
    res.sendFile(path.join(rootDir, 'views', 'contact.html'))   
}

const postContactController = ( req,res,next)=>{  
    // console.log('post od contact us is working')
     res.redirect('/success');    
 }

 module.exports = {useContactController,postContactController}
 