const express = require("express");
const router = express.Router();


const {login,signup} = require("../Controllers/Auth");
const {auth,isStudent,isAdmin} = require("../middlewares/auth");


router.post("/login",login);
router.post("/signup",signup);


//testing the protected route for simple middleware:
router.get("/test",auth,(req,res)=>{
    res.json({
        success:true,
        message:"welcome to the protected route for Tests"
    });
})
//protected Route
router.get("/student",auth,isStudent,(req,res)=>{
    res.json({
        sucess:true,
        message:"welcome to the protected route for stuednts"
    });
});

router.get("/admin",auth,isAdmin,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome to the protected  route for admin",
    });
});


module.exports = router;
