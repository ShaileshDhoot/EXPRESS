const path = require('path')
const rootDir = require('../util/path')

const getShopController = (req,res,next)=>{
    // console.log('hey')
    res.sendFile(path.join(rootDir, 'views', 'shop.html'))    
}
module.exports = getShopController