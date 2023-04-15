const path = require('path');
const rootDir = require('../util/path');
const Product = require('../models/product');

const getAdminControllers = (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
};

const postAdminControllers = (req, res, next) => {
  const { title } = req.body;
  const product = new Product(title);
  product.save();
  res.redirect('/');
};

module.exports = { getAdminControllers, postAdminControllers };
