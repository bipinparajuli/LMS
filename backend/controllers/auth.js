const {validationResult} = require("express-validator")
//signin
const User = require("../models/user")
const jwt= require('jsonwebtoken')
const expressJwt= require("express-jwt")


exports.signup=(req,res)=>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(422).json({
            error:errors.array()[0].msg
        })
    }
    const user = new User(req.body);
    console.log(req.body)
    user.save((err,data)=>{
if(err){
return res.status(400).json({error:"Unable to save data in db" + err})
}
res.json({
    name:data.name,
    email:data.email,
    password:data.enc_password
})


    })


}


exports.signin =(req,res) => {
  const {email,password,name} = req.body;
  const errors = validationResult(req);

  if(!errors.isEmpty()) {
    return res.status(422).json({
        error:errors.array()[0].msg
    })
}
User.findOne({email},(err,user) => {
    if(err){
        res.status(400).json({
            error:"USER email does not exists"
        })
    }
    if(!user.authenticate(password)){
return res.status(403).json({
    error:"User Password and Email does not match"
})
    };

    //creating a Token
const token = jwt.sign({_id:user._id},process.env.SECRET);

    //sending tokem into cookies
res.cookie("token",token,{expire:new Date() + 9999})

//sending res to frontend
const {_id,role,name,email} = user;
res.send({token,user:{_id,name,email,role}})


})
    
}

exports.signOut = (req,res) => {
res.clearCookie("token");
res.json({messege:"User Signout successfully"})
}

exports.isSignedIn = expressJwt({
    secret:process.env.SECRET,
    userProperty:'auth'
})

exports.isAuthenticated = (req,res,next) => {
    let checker = req.profile&&req.auth&&req.profile_id == req.auth_id;
    if(!checker)
    {
        return res.status(403).json({error:"ACCESS DENIED"})
    }
    next();
}


exports.isAdmin = (req,res,next) => {
    if(req.profile.role === 0)
    {
        return res.status(403).json({
            error:"You are not Admin, Access Denied"
        }) 
    }
next();
}