var express = require("express")
var router =express.Router();
const {check,validationResult} =require ('express-validator');
const { signup, signin, isSignedIn } = require("../controllers/auth");


router.post("/signup",[
    check("email","email should be between 5 to 15 char").isLength({min:5,max:15}),
check("password","password should be at least 6 char").isLength({min:6})
],
signup
)

router.post("/signin",[],signin)

router.get("/testroute",isSignedIn,(req,res)=>{
    res.send("Signed in")
})

module.exports = router