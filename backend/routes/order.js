const express = require ("express");
const { getUserByID,pushOrderInBooksArray } = require("../controllers/studentList");
const {isSignedIn,isAdmin,isAuthenticated} = require("../controllers/auth");
const { updateStock } = require("../controllers/bookList");
const { createOrder,getAllOrder,getOrderById,updateStatus,getMyAllBooks } = require("../controllers/order");

const router = express.Router();



router.param("orderId",getOrderById);
router.param("userId",getUserByID);

//actual routes

//create order 
router.post("/order/create/:userId",isSignedIn,isAuthenticated,createOrder);

//getAllOrders
router.get("/order/getAllOrder/:userId",isSignedIn,isAuthenticated,isAdmin,getAllOrder);

//gerOrderByUser
router.get("/order/getMyAllBooks/:userId",isSignedIn,isAuthenticated,getMyAllBooks);


//updateStatus
router.post("/order/UpdateOrderStatus/:userId",isSignedIn,isAuthenticated,isAdmin,updateStatus);


module.exports = router