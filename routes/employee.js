const EmployeeController=require('../controllers/EmployeeController')
const express=require("express")
const router=express.Router()
router.get('/',EmployeeController.index)
router.post('/show',EmployeeController.show)
router.post('/store',EmployeeController.store)
router.post('/update',EmployeeController.update)
router.post('/remove',EmployeeController.remove)

module.exports=router