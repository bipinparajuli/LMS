const Department = require("../models/department");

//get Department By Id
exports.getDepartmentById = (req,res,next,id) => {

    Department.findById(id)
    .then(department=>{
req.department = department
next()
})
    .catch(err => res.json({error:'Unable to find department'+ err}))

}

exports.getAllDepartment = (req,res) => {

    Department.find()
    .then(department => {

        res.status(200).json(department)

    })
.catch(err=>{
    res.json({
        error:"Unable to get all Department" + err
    })
})    
}

exports.createDepartment = (req,res) => {

    // console.log(req.body)
    const department = new Department(req.body);

    department.save()
    .then(data=>{
        res.json({
            messege:"Data Save successfully",
            data:data
        })
    })
    .catch(err=>{
        res.json({
            error:"Failed to insert department" + err
        })
    })


}

exports.updateDepartment = (req,res) => {
Department.findOneAndUpdate(
    {_id:req.department._id},
    {$set:req.body},
    {new:true, findByIdAndUpdate :false}
    ,(err,data)=>{
if(err)
{
    res.json({
        error:"Failed to update department"
    })
}
res.json(data)
    }
)    

}


exports.deleteDepartment = (req,res) => {

Department.remove(req.department)
.then(data=> res.json({messege:"Department removed successfully"}))
.catch(err => res.json({error:"Failed to delete Department"}))
}

