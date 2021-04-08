const studentList = require("../models/studentList")
const User = require("../models/user")
const bycrypt = require('bcrypt')

exports.getUserByID = (req,res,next,id) => {
console.log(id)
    User.findById(id).exec((err,user) => {
console.log(user,err)
        if(err || !user)
    {
        return res.status(400).json({
            error :"No User was Found in DB"
        })
    }
    req.profile = user;
next();
})
}

exports.getStudentByname =(req,res,next,name) => {
    const regx= new RegExp(name,'i')
    User.find({name:regx}).exec((err,user) => {
        if(err || !user)
        {
            return res.status(400).json({
                error :"No Student was Found in DB"
            })
        }

const newuser =[...user]
console.log("Newuser",newuser)
newuser[0].password = undefined
        req.search = user;
    next();
    })
}

exports.searchStudent =(req,res) => {
if(!req.search)
{
    res.json({error:"Ubable to Search"})
}

res.json(req.search)    
}



exports.getStudentByID = (req,res,next,id) => {
    User.findById(id).exec((err,user) => {
        if(err || !user)
        {
            return res.status(400).json({
                error :"No Student was Found in DB"
            })
        }
        req.student = user;
    next();
    })
    }
    
//get single student

exports.getStudent = (req,res)=>{
if(!req.student)
{
    res.json({error:"Unable to find user"})
}

    res.json(req.student)
}



exports.addStudent= async (req,res)=>{
    console.log(req.body)

    const student = new User (req.body);

const {email} = student
 User.findOne({email})
.then(data=>{
if(data == null)
{
    bycrypt.hash(student.password,11,  (err,hash)=>{
        console.log(hash)
        student.password=hash;
    })

    // if(!roll || !name || !email || !address || !phone || !department)
    // {
    //     res.status(400).json({error:"Please Include all the field"})
    // }
    student.save((err,data) => {
        if(err){
            res.status(400).json({
                error:err 
            })
        }
        res.json(data)
    })
}
else{
    res.status(404).json({error:"Email is already use"})
   
}

})
.catch(e=> console.log(e))


//encrypting student password


}


exports.getAllStudents = (req,res) => {
User.find().exec((err,student)=> {
    if(err){
        res.status(400).json({error:'Unable to get all student'})
    }
    res.json(student)
})
}


exports.updateStudent = (req,res) => {

    console.log(req.body)
User.findByIdAndUpdate(
    {_id:req.student._id},
    {$set:req.body},
    {new:true,findByIdAndUpdate:false},
    (err,std)=>{
        if(err){
            res.status(400).json({error:'Unable to update student'})
        }
        res.json(std)  
    }
    )

}

exports.deleteStudent = (req,res) => {
 console.log(req.student)
    const student = req.student;
    User.remove(student,(err,data)=>{
        if(err){
            res.status(400).json({error:'Unable to delete student'})
        }
        res.json({messege:"Success removed student"})
    })

}