const studentList = require("../models/studentList")
const User = require("../models/user")


exports.getStudentByID = (req,res,next,id) => {
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


exports.addStudent= (req,res)=>{
    const student = new studentList (req.body);

    // if(!roll || !name || !email || !address || !phone || !department)
    // {
    //     res.status(400).json({error:"Please Include all the field"})
    // }

    student.save((err,product) => {
        if(err){
            res.staus(400).json({
                error:"Failed to save data in DB"
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

}

exports.deleteStudent = (req,res) => {
    
}