const express = require("express");
const { isAdmin, isSignedIn, isAuthenticated } = require("../controllers/auth");
const { addStudent, getStudentByID,getAllStudents,getUserByID,getStudent, updateStudent,deleteStudent } = require("../controllers/studentList");
const router= express.Router();


router.param("userid",getUserByID)

router.param("studentid",getStudentByID)


router.post('/addstudent/:userid',isSignedIn,isAuthenticated,isAdmin,addStudent)

router.get("/students",getAllStudents)

router.get("/student/:studentid",getStudent)

router.put("/student/updatestudent/:userid/:studentid",isSignedIn,isAuthenticated,updateStudent)

router.delete("/student/deletestudent/:userid/:studentid",isSignedIn,isAuthenticated,isAdmin,deleteStudent)



module.exports = router;