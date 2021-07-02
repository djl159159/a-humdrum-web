
var express = require("express")
var  app = express()

app.use( express.static('../public'))
app.get("/",(req,res)=>{
    res.render("../public/index.html")
    res.end
})

app.listen(3000,function(){
    console.log("wait");
})