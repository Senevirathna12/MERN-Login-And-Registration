const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const EmployeeModel = require('./models/Employee')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL)
.then(() => console.log("MongoDB connection successful!"))
.catch(err => console.error("MongoDB connection error:", err));

app.post("/login", (req,res)=>{
    const {email ,password} =req .body;
    EmployeeModel.findOne({email:email})
    .then((user)=>{
        if(user){
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("The password is incorrect")
            }
        }else{
            res.json("You are not register!!!")
        }
    })
})

app.post('/register',(req,res)=>{
    EmployeeModel.create(req.body)
    .then((employee)=>{
        res.json(employee)
    })
    .catch((err)=>{
        res.json(err)
    })
})


app.listen(PORT, () => {
  console.log(`Server is up and running on port number ${PORT}`);
});