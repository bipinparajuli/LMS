const mongoose = require('mongoose');
const {ObjectId}= mongoose.Schema


// // const bookListSchema = new mongoose.Schema({
// //     book:{
// //         ref:"bookList",
// //         type:ObjectId
// //     },
// //     name:String,
// //     stock:Number
// // })

// // const bookList = mongoose.model("bookListSchema",bookListSchema)

const Order = new mongoose.Schema({
// _id:{
// type:ObjectId    
// },
books:{
    type:Array
},
users:{
    type:Array
},
book:{
    type:ObjectId,
    ref:"bookList",
    // required:true
},
updated:Date,
status:{
    type:String,
    required:true,
    default:'Received',
    enum:["Cancalled","Received","Pending"]
},
user:{
ref:"User",
type:ObjectId
}
})

module.exports=mongoose.model("Order",Order)

// module.exports = {Order,bookList}