const path = require('path')

const express = require('express');
const bodyParser = require('body-parser');
const errorController = require('./controllers/errorController')
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contact');


app.get('/success', (req, res, next) => {
   // console.log('i have been called');
    res.send('Form successfully submitted')
   
});

app.use(adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);

app.use(errorController.error404);

app.listen(3000)
