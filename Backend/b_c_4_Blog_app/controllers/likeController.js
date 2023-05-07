
const Post = require("../models/postModel");
const Like = require("../models/likeModel");

//Like  a posts 
// exports.likePost = async(req,res)=>{
//     try{
//        const {post,user} = req.body;
//        const like = new Like({
//         post,user,
//        });
//        const savedLike = await like.save();

//      //updating to the psot collection 
//        const udpatedPost = await Post.findByIdAndUpdate(post, {$push: {likes: savedLike._id} }, {new :true});

//        res.json({
//         save:savedLike,
//         post:udpatedPost
//        })
//     }
//     catch(error){
//         return res.status(500).json({
//             error:"error while creating Like ",
//            });
//     }
// }
exports.likePost = async (req,res) => {
    try {
        const {post, user} = req.body;
        const like = new Like({
            post, user,
        });
        const savedLike = await like.save();

        //update the post collection basis on this
        const udpatedPost = await Post.findByIdAndUpdate(post, {$push: {likes: savedLike._id} }, {new :true});

        res.json({
        
            post:udpatedPost,
        });

    }
    catch(error) { 
        return res.status(400).json({
            error: "Error while Liking post",
        });
    }
}



exports.dummyLink = (req,res)=>{
    res.send("this is your dummy page");

}