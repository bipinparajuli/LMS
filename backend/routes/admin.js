var express = require("express")
var router =express.Router();
const {check,validationResult} =require ('express-validator');
const { signup, signin, isSignedIn } = require("../controllers/auth");


router.post("/signup",[
    check("email","email should be between 5 to 15 char").isLength({min:5,}).isEmail(),
check("password","password should be at least 6 char").isLength({min:6})
],
signup
)


router.post("/signin",[ check("email","email should be between 5 to 35 char").isLength({min:5,max:35}).isEmail(),
check("enc_password","password should be at least 6 char").isLength({min:6})],signin)



module.exports = router