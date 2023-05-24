//auth,isStudent,isAdmin

const jwt = require("jsonwebtoken");
require("dotenv").config();
//next for calling next middleware
exports.auth=(req,res,next)=>{
    try{

        //extract jwt token
        //pending :other ways to fetch token
        const token = req.body.token;

        if(!token){
            return res.status(401).json({
                success:false,
                message:'Token missing',
                });
        }
        
        //verify the token
        try{

            const decode = jwt.verify(token,process.env.JWT_SECRET);
            console.log(decode);
            //yaha ser ke ander decode isliye dala badd me ham user se role match kaarwa sake
            req.user = decode; 
      
        }catch(error){
            console.log(error);
            return res.status(401).json({
                success:false,
                message:'token is invalid'
            });
        }
        next();
    }catch(error){  
        return res.status(401).json({
            success:false,
            message:"something went wrong,while veifying the token "
        })
    }
}

exports.isStudent = (req,res,next)=>{
    try{
        if(req.user.role !=="Student"){
            return res.status(401).json({
                success:false,
                message:"this is a protected route for students"
            })
        }
        next();

    }catch(error){
         return res.status(500).json({
            success:false,
            message:"user role is not matching"
         })
    }
}

exports.isAdmin = (req,res,next)=>{
    try{
        if(req.user.role !=="Admin"){
            return res.status(401).json({
                success:false,
                message:"this is a protected route for admin"
            })
        }
        next();

    }catch(error){
         return res.status(500).json({
            success:false,
            message:"user role is not matching"
         })
    }
}