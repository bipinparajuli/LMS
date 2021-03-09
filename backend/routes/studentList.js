const express = require("express");
const { isAdmin, isSignedIn, isAuthenticated } = require("../controllers/auth");
const { addStudent, getStudentByID } = require("../controllers/studentList");
const router= express.Router();


router.param("userid",getStudentByID)

router.post('/addstudent/:userid',isAdmin,isSignedIn,isAuthenticated,addStudent)

router.get("/students",getAllStudents)

module.exports = router;