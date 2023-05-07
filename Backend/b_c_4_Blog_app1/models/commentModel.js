//import mongoose
const mongoose = require("mongoose");

//route handler
const commenSchema = new mongoose.Schema({
    Post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",//reference to the post model
    },
    user:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }
});


//export 
module.export= mongoose.model("Comment",commenSchema)