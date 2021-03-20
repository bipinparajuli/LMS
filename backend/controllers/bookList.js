const { json } = require("body-parser")
const bookList = require("../models/bookList")

exports.getBookById = (req,res,next,id) => {
    bookList.findById(id,(err,book)=> {
if(err)
{
    err.status(403).json({error:"Could not find Book by id"})
}
req.book = book
})
}


exports.createBook = (req,res) => {

    const book = new bookList(req.body);

    book.save((err,book)=>{
        if(err)
        {
            res.status(403).json({error:"Error in creating Book"})
        }
        res.json(book)
    })

}

exports.getBook = (req,res) => {
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
    if(err)
    {
        json.status(404).json({error:"Error in deleting Book "})
    }
    res.json({messege:"Book Deleted Successfully"})
})

}