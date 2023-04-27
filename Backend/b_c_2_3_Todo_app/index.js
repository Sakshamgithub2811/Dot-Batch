// const express = require("express");
// const app = express();

// app.listen(3000,()=>{
//     console.log("App is running succesfully");
// });

const express = require("express");
const app = express();

//load config form env file
require("dotenv").config();
const PORT = process.env.PORT ||4000;

//middleware to parse json request body
app.use(express.json());

//import routes for TODO api;
const todoRoutes = require("./routes/todos");

//mount the todo api routes
app.use("/api/v1",todoRoutes);

//start server
app.listen(PORT, ()=>{
    console.log(`server start succesfully at ${PORT}`);
})
//connect to the database
const dbConnect = require("./config/database");
dbConnect();

//default Route
app.get("/",(req,res)=>{
    res.send(`<h1>this is homepage baby </h1>`);
})