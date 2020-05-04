"use strict";

var path = require('path');

var express = require('express');

var rootDir = require('../util/path');

var adminData = require('./admin');

var router = express.Router();
router.get('/', function (req, res, next) {
  var products = adminData.products;
  res.render('shop', {
    prods: products,
    docTitle: "Shop"
  }); // console.log('shop.js', adminData.products);
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});
module.exports = router;