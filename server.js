const express=require("express")
const mongoose=require("mongoose")
const bodyparser=require("body-parser")
const morgan=require("morgan")
const employeeRouter=require('./routes/employee')
const PORT=process.env.port|| 5000
mongoose.connect("mongodb://localhost:27017/flower")
const db=mongoose.connection

db.on('error',(err)=>{
    console.log(err)
})
db.once('open',()=>{
    console.log("connection established")
})
const app=express()

app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})
app.use('/api/employee',employeeRouter)