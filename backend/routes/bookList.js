const express = require("express");
const router = express.Router();

const {isSignedIn,isAuthenticated,isAdmin} = require('../controllers/auth')

const {geBookByName,searchBook,createBook, updateBook, getAllBooks, getBook, deleteBook,getBookById} = require('../controllers/bookList')

const {getUserByID} = require('../controllers/studentList')

router.param("bookid",getBookById)
router.param("userid",getUserByID)
router.param("bookname",geBookByName)



router.post("/book/createbook/:userid",isSignedIn,isAuthenticated,isAdmin,createBook)

router.put("/book/updatebook/:userid/:bookid",isSignedIn,isAuthenticated,isAdmin,updateBook)

router.get("/book/getallbooks",getAllBooks)

router.get("/book/getbook/:bookid",getBook)

router.get("/search/book/:bookname",searchBook)


router.delete("/book/deletebook/:userid/:bookid",isSignedIn,isAuthenticated,isAdmin,deleteBook)
// router.delete("/student/deletestudent/:userid/:studentid",isSignedIn,isAuthenticated,isAdmin,deleteStudent)

module.exports = router;