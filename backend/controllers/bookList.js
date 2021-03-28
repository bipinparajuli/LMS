const { json } = require("body-parser")
const bookList = require("../models/bookList")

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


exports.createBook = (req,res) => {
    console.log(req.body)

    const book = new bookList(req.body);
    book.save((err,book)=>{
        if(err)
        {
            res.status(403).json({error:err})
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
    if(err)
    {
        res.status(403).json({error:"Could not find all book"})
    }
    res.json(books)
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
console.log(book)
bookList.remove(book,(err,data)=>{
    if(err)
    {
        json.status(404).json({error:"Error in deleting Book "})
    }
    res.json({messege:"Book Deleted Successfully"})
})

}