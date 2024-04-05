const mongoose =require('mongoose')
const EmployeScehma=new mongoose.Schema(
    {
        name:String,
        email:String,
        password:String
    }
)
const EmployeeModel=mongoose.model("employees",EmployeScehma);
module.exports=EmployeeModel;