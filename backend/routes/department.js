const express = require("express")


const router = express.Router();

const {isSignedIn,isAuthenticated,isAdmin} = require('../controllers/auth')

const {createDepartment,deleteDepartment,getAllDepartment,updateDepartment,getDepartmentById} = require('../controllers/department');
const { getUserByID } = require("../controllers/studentList");



router.param("departmentId",getDepartmentById);
router.param("userId",getUserByID)

router.get("/department/alldepartment/:userId",isSignedIn,isAuthenticated,getAllDepartment);

router.put("/department/updatedepartment/:userId/:departmentId",isSignedIn,isAuthenticated,isAdmin,updateDepartment)

router.post('/department/adddepartment/:userId',isSignedIn,isAuthenticated,isAdmin,createDepartment)

router.delete("/department/deletedepartment/:userId/:departmentId",isSignedIn,isAuthenticated,isAdmin,deleteDepartment)


module.exports = router