const express = require("express");
const app = express();

// //server starts
// app.listen(3000,()=>{
//     console.log("app succesfully runs");
// })

// //default route
// app.get("/",(req,res)=>{
//     res.send("this is my home page ");
// })
require("dotenv").config();
const PORT = process.env.PORT || 3000

//middleware
app.use(express.json());

const blog = require("./routes/blog");
//mount
app.use("/api/v1",blog);

const connectWithDb = require("./config/database");
connectWithDb();

app.listen(PORT,()=>{
    console.log(`App is started at port no ${PORT}`);
})

app.get("/",(req,res)=>{
    res.send("<h1>thi is my homepage</h1>")
})