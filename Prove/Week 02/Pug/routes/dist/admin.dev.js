"use strict";

var path = require('path');

var express = require('express');

var rootDir = require('../util/path');

var router = express.Router();
var products = []; // /admin/add-product => GET

router.get('/add-product', function (req, res, next) {
  res.render('add-product', {
    pageTitle: "Add Product",
    path: "/admin/add-product"
  }); //res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
}); // /admin/add-product => POST

router.post('/add-product', function (req, res, next) {
  products.push({
    title: req.body.title
  });
  res.redirect('/');
});
exports.routes = router;
exports.products = products;