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


exports.signin =(req,res,next) => {
  const {email,password,name} = req.body;
  const errors = validationResult(req);

//   console.log("Signin",email,password)

  if(!errors.isEmpty()) {
    // return res.status(422).json({
    //     error:errors.array()[0].msg
    // })

    const error = new Error(errors.array()[0].msg)
     error.info=error.message;
     error.statuscode= 422;

     throw error 
    //  next(error)
}
User.findOne({email},(err,user) => {
    if(err || !user){
        res.status(400).json({
            error:"USER email does not exists"
        })
    }
    // console.log(user)
    if(!user.authenticate(password)){
return res.status(401).json({
    error:"User Password and Email does not match"
})
    };

    //creating a Token
const token = jwt.sign({_id:user._id},process.env.SECRET);

    //sending tokem into cookies
res.cookie("token",token,{expire:new Date() + 9999})

//sending res to frontend
// console.log(user);
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
    userProperty:'auth',
    algorithms: ['sha1', 'RS256', 'HS256'],

})

exports.isAuthenticated = (req,res,next) => {
    console.log(req.profile,req.auth)
    let checker = req.profile&&req.auth&&req.profile._id == req.auth._id;
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
    console.log("Admin check")
next();
}