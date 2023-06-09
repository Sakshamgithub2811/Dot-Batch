const express = require("express");
const app = express();

// app.listen(3000,()=>{
//     console.log("app is running succesfully");
// })

// app.get("/",(req,res)=>{
//     res.send("this is HomePage baby ");
    
// })

require("dotenv").config();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());

const blog = require("./routes/blog");

//mount 
app.use("/api/v1",blog);
//start the server
app.listen(PORT,()=>{
    console.log(`app is started at Port no ${PORT}`);
    
})

const connectWithDb = require("./config/database");
connectWithDb();

