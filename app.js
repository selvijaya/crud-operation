const express=require("express")
const app=express()
const port=process.env.port||3000
const exhbs=require("express-handlebars")
const bodyparser=require("body-parser")
require('dotenv').config()

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use(express.static("public"))

const handlebars=exhbs.create({extname:".hbs"})
app.engine('hbs',handlebars.engine);
app.set("view engine","hbs")
app.get('/',(req,res)=>{
    res.render("home")
   
})

app.listen(port,()=>{
    console.log("server is running on",port)
})

