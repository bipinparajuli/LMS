const studentList = require("../models/studentList")
const User = require("../models/user")


exports.getUserByID = (req,res,next,id) => {
User.findById(id).exec((err,user) => {
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


exports.getStudentByID = (req,res,next,id) => {
    studentList.findById(id).exec((err,user) => {
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
    res.json(req.student)
}



exports.addStudent= (req,res)=>{
    const student = new studentList (req.body);

    // if(!roll || !name || !email || !address || !phone || !department)
    // {
    //     res.status(400).json({error:"Please Include all the field"})
    // }

    student.save((err,product) => {
        if(err){
            res.status(400).json({
                error:err 
            })
        }
        res.json(product)
    })

}


exports.getAllStudents = (req,res) => {
studentList.find().exec((err,student)=> {
    if(err){
        res.status(400).json({error:'Unable to get all student'})
    }
    res.json(student)
})
}


exports.updateStudent = (req,res) => {
studentList.findByIdAndUpdate(
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
    const student = req.student;
    studentList.remove(student,(err,data)=>{
        if(err){
            res.status(400).json({error:'Unable to delete student'})
        }
        res.json({messege:"Success removed student"})
    })

}