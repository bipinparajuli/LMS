require("dotenv").config()
const express= require ("express")

//routes
const adminRoutes = require ("./routes/admin")
const studentRoutes = require ("./routes/studentList")
const bookRoutes = require ("./routes/bookList")
const orderRoutes = require("./routes/order")
const departmentRoutes = require("./routes/department")


const app=express();
const bodyParser = require('body-parser')
const mongoose = require("mongoose")
const cors = require("cors")

app.use(cors());


//DATABASE CONNEVITY
mongoose.connect(process.env.DATABASE,
 {
useNewUrlParser: true, 
 useUnifiedTopology: true,
 useCreateIndex:true
})
.then(()=>console.log("DB connected"))
.catch((e)=>console.log(e));



//middleware
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
//routes
app.use("/api",adminRoutes)
app.use("/api",studentRoutes)
app.use("/api",bookRoutes)
app.use("/api",orderRoutes)
app.use("/api",departmentRoutes)



app.use((error,req,res,next)=>{
    console.log('i am error',error)
    const status = error.statuscode || 500;
    const messege = error.info;

    res.json({
        status:status,
        messege:messege
    })

})




app.listen (process.env.PORT || 8000,()=>{
    console.log("app is runnig")
})
