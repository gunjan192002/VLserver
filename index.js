const express=require("express")
const mongoose =require("mongoose")
const cors=require("cors")
const EmployeeModel=require('./models/Employee')
const app=express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://gunjan192002:gunjan1234@cluster0.1b3uuiv.mongodb.net/")
 
app.post('/register',(req,res) => {

    const {email,password}=req.body;
    EmployeeModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password)
            {
                res.json("Success")
            }
            else{
                res.json("Teh password is incorrect")
            }
        }
        else{
            res.json("No record existed")
        }
    })
})
app.post('/login',(req,res) => {

    EmployeeModel.create(req.body)
    .then(employees=>res.json(employees))
    .catch(err=>console.log(err))
})
app.listen(3069,()=>{

    console.log("server is running on port 3001")

})