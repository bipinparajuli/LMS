const { json } = require("body-parser")
const bookList = require("../models/bookList")
const Order = require("../models/order")

exports.getBookById = (req,res,next,id) => {
    // console.log("fire me")
    bookList.findById(id,(err,book)=> {
if(err)
{
    res.status(403).json({error:"Could not find Book by id"})
}
req.book = book
next();
})
}

exports.geBookByName = (req,res,next,name) => {
const regx = new RegExp(name,'i')

    bookList.find({bookname:regx},(err,book)=> {
if(err)
{
    res.status(403).json({error:"Could not find Book by id"})
}
req.bookname = book
next();
})
}

exports.searchBook =(req,res) => {

    res.json(req.bookname)
    
}



exports.createBook = (req,res) => {
    console.log(req.body)

    const book = new bookList(req.body);
    book.save((err,book)=>{
        if(err)
        {
            res.status(403).json({error:"Unable to save book in db"})
        }
        res.json(book)
    })

}

exports.getBook = (req,res) => {
    console.log(req.book)
res.json(req.book)
}

exports.getAllBooks = (req,res) => {

    bookList.find((err,books)=> {
    console.log(err,books)
    if(err )
    {
        res.status(403).json({error:"Could not find all book"})
    }
 
    else{

        res.json(books)

    }
    
})

}

exports.updateBook = (req,res) => {
    console.log(req.book)
bookList.findByIdAndUpdate(
    {_id:req.book._id},
    {$set:req.body},
    {new : true , findByIdAndUpdate :false},
    (err,data)=>{
        if(err)
    {
        res.status(403).json({error:"Error in updating book "})
    }
    res.json(data)
    }
    )

}

exports.deleteBook = (req,res) => {
const book = req.book;
bookList.remove(book,(err,data)=>{
console.log(req.book)
    // Order.deleteOne({book:req.book._id})
    // .then(data=>{
    // res.json({messege:"Order  Deleted Successfully"})

    // })
    if(err)
    {
        json.status(404).json({error:"Error in deleting Book "})
    }

    res.json({messege:"Book Deleted Successfully"})
})

}

exports.updateStock = (req, res, next) => {
    console.log(req.body)
    let myOperations = req.body.order.book.map(bok => {
      return {
        updateOne: {
          filter: { _id: bok._id },
          update: { $inc: { stock: -bok.stock,  } }
        }
      };
    });
  
    Product.bulkWrite(myOperations, {}, (err, products) => {
      if (err) {
        return res.status(400).json({
          error: "Bulk operation failed"
        });
      }
      next();
    });
  };
  