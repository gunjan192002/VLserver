const express=require("express")
const mongoose =require("mongoose")
const cors=require("cors")
const EmployeeModel=require('./models/Employee')
const app=express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://gunjan192002:gunjan1234@cluster0.1b3uuiv.mongodb.net/")
 app.get("/", (req, res) => {
  res.send({ message: "Hello world"})
  })
app.post('/login',(req,res) => {

    const {email,password}=req.body;
    EmployeeModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password)
            {
                res.json("Success")
                console.log("1")
            }
            else{
                res.json("The password is incorrect")
                console.log("2")
            }
        }
        else{
            res.json("No record existed")
            console.log("3")
        }
    })
})
app.post('/register',(req,res) => {

    EmployeeModel.create(req.body)
    .then(employees=>res.json(employees))
    .catch(err=>console.log(err))
})
app.listen(3001,()=>{

    console.log("server is running on port 3001")

})