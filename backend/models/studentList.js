const mongoose = require("mongoose");

const studentList = mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
        maxlength:32
    },
    phone:{
        type:Number,
        trim:true,
        maxlength:10,
        minlength:10,
        required:true,
    },
    address:{
        type:String,
        trim:true,
        required:true,
    },
    email:{
        type:String,
        required:true,
        trim:true
    }
})

module.exports=mongoose.model("studentList",studentList);