//import model
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

//bussines logic

exports.createComment = async(req,res)=>{

    //using save method :
    try{
       //fetch data from body
       const{post,user,body} = req.body;
       //create a comment object
       const comment = new Comment({
        post,user,body
       });
         
       //save the new comment into the db 
       const saveComment = await comment.save();

       //find the post by id ,add new comment to the array 
       const updatedPost = await Post.findByIdAndUpdate(post,{$push:{comments:saveComment._id}},{new:true}).populate("comments").exec();
       //poulate nhi karege to id's ayege or populate karege to actual comment ayege.

       //$push is a operator to update 
       

       res.json({
        post:updatedPost,
       });
    }
    catch(error){
       return res.status(500).json({
        error:"error while creating comment",
       });
    }
}  