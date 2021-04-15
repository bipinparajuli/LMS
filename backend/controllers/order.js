const Order = require("../models/order")
const User = require("../models/user")
exports.getOrderById =(req,res,next,id)=>{
console.log(id)
  Order.findById(id)
.then(data=>{

    req.order= data;
    next();

})
.catch(e=> console.log(e))
    
}

//TODO
exports.getOrderByBookId =(req,res,next,id)=>{
  console.log("I am in Book Order By Id")
    Order.findById(id)
  .then(data=>{
  
      req.order= data;
console.log("BOOK BY ID",req.order)
      next();
  
  })
  .catch(e=> console.log(e))
      
  }

exports.getAllBookOrder = (req,res) => {
  console.log("GETTING BACK")
  res.json(req.profile.books)
}

exports.createOrder = (req,res) => {
    // req.body.order.user = req.profile;
    console.log("creating order")

    const order = new Order(req.body);
    order.save((err, order) => {
      if (err) {
                      return res.status(400).json({
                        error: "Failed to save your order in DB" + err
                      });
                }
                console.log(order)

      Order.findById(order._id)
      .populate("book")
      .populate("user _id")
      .then(data=>{
        console.log("Books",data)

        let books = [];
                books.push({
                    _id: data.book._id,
                    bookname: data.book.bookname,
                    // description: product.description,
                    department: data.book.department,
                    publication: data.book.publication,
                    authorname:data.book.authorname,
                    status:"Pending"
                  });

      
        //store this in DB
        User.findOneAndUpdate(
          { _id: order.user._id },
          { $push: { books: books } },
          { new: true },
          (err, books) => {
            if (err) {
                    return res.status(400).json({
                      error: "Unable to save purchase list"
                    });
                }
      })
    }
      )
      .catch(e=> console.log(e))



      res.json(order);
    });
}

exports.getAllOrder = (req,res) => {

    Order.find()
    .populate("book")
    .populate("user")
    .then(data=>{
        res.json(data)
    })
    .catch(e=> console.log(e))

}



//updating the status of order
exports.updateStatus = (req, res) => {
    Order.update(
      { _id: req.body.orderId },
      { $set: { status: req.body.status } },
      (err, order) => {
        if (err) {
          return res.status(400).json({
            error: "Cannot update order status"
          });
        }


        res.json(order);
      }
    );
  };
  
  exports.deleteOrder =(req,res,next)=>{
    console.log(req.order.book)

   Order.deleteOne({book:req.order._id})
   .then(data=>{
     console.log(data)
     next()
     res.json({messege:"Order Deleted Successfully"})
   }) .catch(err=>{
    res.json({error:"Order Deleted Successfully"})

   })
  }