const express = require("express");
const router = express.Router();

const {isAdmin,isAuthenticated,isSignedIn} = require('../controllers/auth')

const {createBook, updateBook, getAllBooks, getBook, deleteBook} = require('../controllers/bookList')

router.param("bookId",getBookById)

router.post("/book/createbook/:userId",isSignedIn,isAuthenticated,isAdmin,createBook)

router.put("/book/updatebook/:userid/:bookId",isSignedIn,isAuthenticated,isAdmin,updateBook)

router.get("/book/getallbooks",isSignedIn,isAuthenticated,getAllBooks)

router.get("/book/getbook/:bookId",getBook)

router.delete("/book/deletebook/:userId/:bookId",isSignedIn,isAuthenticated,isAdmin,deleteBook)

module.exports = router