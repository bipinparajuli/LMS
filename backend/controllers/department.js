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


