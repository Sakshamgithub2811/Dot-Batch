const mongoose = require("mongoose");

require("dotenv").config();
 
const dbConnect = () =>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>console.log(" db ka connectoin succesfull"))
    .catch((error)=>{
        console.log("issue in db connection ",error.message);
        //iska kya mtlb hota hoga:
        process.exit(1);
    })
}

module.exports = dbConnect;