const studentList = require("../models/studentList")
const User = require("../models/user")
const bycrypt = require('bcrypt')

exports.getUserByID = (req,res,next,id) => {
    User.findById(id).exec((err,user) => {
// console.log(user,err)
        if(err || !user)
    {
        return res.status(400).json({
            error :"No User was Found in DB"
        })
    }

    req.profile = user;
// console.log(req.profile)s

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
// console.log("Newuser",newuser)
newuser[0].enc_password = undefined
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
    //  console.log(req.body)

    const student = new User (req.body);

const {email,enc_password} = student
 User.findOne({email})
.then(data=>{
if(data == null)
{
    bycrypt.hash(enc_password,11).then(hash=>{
        console.log("HASING",hash)
        student.enc_password=  hash;
        student.save((err,data) => {
 console.log(data)
            if(err){
                res.status(400).json({
                    error:err 
                })
            }
            res.json(data)
        })    
    })

    // if(!roll || !name || !email || !address || !phone || !department)
    // {
    //     res.status(400).json({error:"Please Include all the field"})
    // }
    
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

//updating books Array
// exports.pushOrderInBooksArray = (req, res, next) => {
//     console.log("res",req.body)
//     let books = [];
//     req.body.book.forEach(book => {
//       books.push({
//         _id: book._id,
//         bookname: book.bookname,
//         // description: product.description,
//         department: book.department,
//         publication: book.publication,
//       });
//     });
  
//     //store thi in DB
//     User.findOneAndUpdate(
//       { _id: req.profile._id },
//       { $push: { books: books } },
//       { new: true },
//       (err, books) => {
//         if (err) {
//           return res.status(400).json({
//             error: "Unable to save purchase list"
//           });
//         }
//         next();
//       }
//     );
//   };
  

