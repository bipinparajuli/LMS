const mongoose = require("mongoose");

const Department = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    }
})

module.exports = mongoose.model("Department",Department)