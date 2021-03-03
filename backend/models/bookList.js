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
bookId:{
    type:Number,
    trim:true,
    required:true
},
publication:{
    type:String,
    trim:true,
    required:true
}
},{timestamps:true})

module.exports = mongoose.model("bookList",bookList)