const {validationResult} = require("express-validator")
//signin
const User = require("../models/user")

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
        error:errorsss.array()[0].msg
    })
}
User.findOne({email},(err,user) => {
    if(err){
        res.status(400).json({
            error:"USER email does not exists"
        })
    }



})
    
}