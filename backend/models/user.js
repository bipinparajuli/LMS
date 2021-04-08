const mongoose = require("mongoose")
const crypto = require('crypto')
const { v4: uuidv4 } = require('uuid');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        maxlength:15
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    roll_no:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    enc_password:{
        type:String,
        required:true,
        default:"Xavier123"
    },
    salt:String,
    role:{
        type:Number,
        default:0
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

    department:{
        type:String,
        required:true,
        trim:true
    },
    bookissue:{
        type:Number,
        trim:true
    }
});

// userSchema.virtual("password")
// .set(function(password){
// this._password=password
// this.salt= uuidv4();
// this.enc_password=this.securePassword(password)
// })
// .get(function(){
//     return this._password
// })


// userSchema.methods={

// authenticate:function (plainpassword){
// return this.securePassword(plainpassword) === this.enc_password
// },

// securePassword:function (plainpassword){
// if(!plainpassword) return "Something is wrong"
// try{
//         return crypto.createHmac('sha256', this.salt)
//         .update(plainpassword)
//         .digest('hex')
//                 }
//                 catch(err){
//         return "";
//                 }
//     }
// }

module.exports=mongoose.model("User",userSchema)