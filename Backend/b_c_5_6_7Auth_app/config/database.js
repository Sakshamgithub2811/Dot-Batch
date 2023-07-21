const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = ()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>console.log("DB conneciton succesfully "))
    .catch((err)=>{console.log("DB COnnection error")
    console.error(err);
    process.exit(1);
})
}