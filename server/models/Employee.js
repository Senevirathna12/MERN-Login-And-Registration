const mongoose = require("mongoose");

const Schema = mongoose.Schema

const EmployeeSchema = new Schema({

    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required :true
    },
    password : {
        type : String,
        required :true
    }

})

const EmployeeModel = mongoose.model("employees", EmployeeSchema);

module.exports = EmployeeModel;
