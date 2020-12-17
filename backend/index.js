const express= require ("express")
const adminRoutes = require ("./routes/admin")
const app=express();
const bodyParser = require('body-parser')
const mongoose = require("mongoose")
const cors = require("cors")

//DATABASE CONNEVITY
mongoose.connect('mongodb://localhost:27017/mymis',
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


app.listen(8000,()=>{
    console.log("app is runnig")
})
