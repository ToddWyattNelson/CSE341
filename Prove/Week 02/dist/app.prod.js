"use strict";var path=require("path"),express=require("express"),bodyParser=require("body-parser"),app=express();app.set("view engine","pug"),app.set("views","views");var adminData=require("./routes/admin"),shopRoutes=require("./routes/shop");app.use(bodyParser.urlencoded({extended:!1})),app.use(express.static(path.join(__dirname,"public"))),app.use("/admin",adminData.routes),app.use(shopRoutes),app.use(function(e,s,p){s.status(404).render("404",{title:"Page Not Found!"})}),app.listen(3e3);