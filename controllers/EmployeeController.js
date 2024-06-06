const employee = require("../models/employee")


const index =(req,res,next)=>{
    employee.find()
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({
            message:'error occured'
        })
    })
}

const show=(req,res,next)=>{
    let employeeId=req.body.employeeId
    employee.findById(employeeId)
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({
            message:'error occured'
        })
    })
}
const store =(req,res,next)=>{
    let  employees = new employee({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        age:req.body.age
    })
    employees.save()
    .then(response=>{
        res.json({
            message:'employees add successfully'
        })
    })
    .catch(error=>{
        res.json({
            message:'an error occurred'
        })
    })
}

const update=(req,res,next)=>{
    let employeeId=req.body.employeeId
    let updateData={
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        age:req.body.age
    }
    employee.findByIdandupdate(employeeId,{$set:updateData})
    .then(()=>{
        res.json({
            message:"updated successfully"
        })
    })
    .catch(error=>{
        res.json({
            message:"error occured"
        })
    })
}
const remove =(req,res,next)=>{
    let employeeId = req.body.employeeId
    employee.findOneAndRemove(employeeId)
    .then(()=>{
        res.json({
            message:'removed employeeID'
        })
    })
    .catch(error=>{
        res.json({
            message:'error occured'
        })
    })
}
module.exports={
    index,show,store,update,remove
}