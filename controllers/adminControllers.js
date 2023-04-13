const  path = require('path')

const rootDir = require('../util/path')

const getAdminControllers=(req,res,next)=>{
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))   
}

const postAdminControllers = ( req,res,next)=>{      
    console.log(req.body);
    res.redirect('/')
}

module.exports={getAdminControllers,postAdminControllers}