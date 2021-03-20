const express = require("express");
const router = express.Router();

const {isAdmin,isAuthenticated,isSignedIn} = require('../controllers/auth')

const {createBook} = require('../controllers/bookList')

router.param("bookId",getBookById)

router.post("/book/createbook/:userid",isSignedIn,isAuthenticated,isAdmin,createBook)


module.exports = router