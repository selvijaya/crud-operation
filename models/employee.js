const mongoose=require('mongoose')
const Schema=mongoose.Schema
const employeeSchema=new Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:Number
    },
    age:{
        type:Number
    }
},{timestamps:true})
const employee=mongoose.model("employee",employeeSchema)
module.exports=employee;