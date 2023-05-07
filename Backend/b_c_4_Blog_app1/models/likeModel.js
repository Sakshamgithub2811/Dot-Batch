//import mongoose
const mongoose = require("mongoose");

//route handler
const likeSchema = new mongoose.Schema({
    Post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",//reference to the post model
    },
    user:{
        type:String,
        required:true
    },
    
});


//export 
module.export= mongoose.model("Like",likeSchema)