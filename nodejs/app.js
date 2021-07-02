var path = require("path");
var fs = require("fs");
var formidable = require('../node_modules/formidable');
var express = require("express")
var  app = express()

app.use( express.static('../public'))
app.get("/",(req,res)=>{
    res.render("../public/index.html")
    res.end
})

app.post("/image",(req,res) =>{
    var form = new formidable
    //form.encoding = "utf-8"
    form.uploadDir = "../public/img"
    form.keepExtensions = true
    form.maxFieldsSize = 8 * 1024 * 1024
    
    form.parse(req, function (err, fields, files){
        // console.log(fields)
        res.send("okk")
        
    })
    
})

app.listen(3000,function(){
    console.log("wait");
})