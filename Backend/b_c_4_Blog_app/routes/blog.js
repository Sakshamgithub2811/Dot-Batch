const express = require("express");
const router = express.Router();

// import Controller
const {dummyLink,likePost} = require("../controllers/LikeController");
const {createComment} = require("../controllers/CommentController");
const {createPost,getAllPosts} = require("../controllers/PostController");

// mapping create
router.get("/dummyroute",dummyLink);
router.post("/comments/create",createComment);
router.post("/posts/create",createPost);
router.get("/posts",getAllPosts);
router.post("/likes/like",likePost)
// export 

module.exports = router;