require("dotenv").config()
const express= require ("express")
const adminRoutes = require ("./routes/admin")
const studentRoutes = require ("./routes/studentList")

const app=express();
const bodyParser = require('body-parser')
const mongoose = require("mongoose")
const cors = require("cors")

//NwuJcfEAyXRyqq6k

//DATABASE CONNEVITY
mongoose.connect(process.env.DATABASE,
 {
useNewUrlParser: true, 
 useUnifiedTopology: true,
 useCreateIndex:true
})
.then(()=>console.log("DB connected"))
.catch((e)=>console.log(e));


app.get("/",(req,res)=>{
    res.send("Hello Programmer")
})
//middleware
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors())
//routes
app.use("/api",adminRoutes)
app.use("/api",studentRoutes)


app.listen(8000,()=>{
    console.log("app is runnig")
})
