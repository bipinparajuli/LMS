const mongoose = require("mongoose");

const bookList = new mongoose.Schema({
bookname:{
    type:String,
    required:true,
     trim:true
},
stocks:{
    type:Number,
    required:true,
    trim:true
},
authorname:{
    type:String,
    required:true,
    trim:true
},
publication:{
    type:String,
    trim:true,
    required:true
},
department:{
    type:String,
    trim:true,
    enum:["BCA","BBM","BSW","BBS"]
}
},{timestamps:true})

module.exports = mongoose.model("bookList",bookList)