//import mongoose instance
const mongoose = require("mongoose");


//route handler 
const commentSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post" // this is reference to the post model
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

module.exports = mongoose.model("Comment",commentSchema)



 //export 