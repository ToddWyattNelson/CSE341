"use strict";var path=require("path"),express=require("express"),rootDir=require("../util/path"),router=express.Router(),products=[];router.get("/add-product",function(r,t,e){t.render("add-product",{pageTitle:"Add Product",path:"/admin/add-product"})}),router.post("/add-product",function(r,t,e){products.push({title:r.body.title}),t.redirect("/")}),exports.routes=router,exports.products=products;