const express = require("express")


const router = express.Router();

const {isSignedIn,isAuthenticated,isAdmin} = require('../controllers/auth')

const {} = require('../controllers/department')


router.param("departmentId",getDepartmentById);

router.get("/department/alldepartment",isSignedIn,isAuthenticated,getAllDepartment);

router.put("/department/updatedepartment/:departmentId",isSignedIn,isAuthenticated,isAdmin,updateDepartment)

router.post('/department/adddepartment',isSignedIn,isAuthenticated,isAdmin,createDepartment)

router.delete("/department/deletedepartment/:departmentId",isSignedIn,isAuthenticated,isAdmin,deleteDepartment)


module.exports = router