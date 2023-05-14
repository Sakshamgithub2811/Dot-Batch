const bcrypt = require("bcrypt");
const User = require("../Model/User");

//signup route handler
exports.signup = async (req,res)=>{
    try{
       //get data 
       const {name,email,password,role } = req.body;

       //check if user id already exists
       const existingUser = await User.findOne({email});
       if(existingUser){
        return res.status(400).json({
            success:false,
            message:"User already exists:",
        })
       }

       //secure password 
       let  hashedPassword;
       try{
        hashedPassword = await bcrypt.hash(password,10)
       }
       catch(error){
        return res.status(500).json({
            success:false,
            message:'user in hashed password',
        })
       }

       //create entry for User 
       const user = await User.create({
        name,email,password:hashedPassword,role
       });
       return res.json(200).json({
        success:false,
        message:'Error in hasing password',
       });
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            succes:false,
            message:'user cannot be registerd ,please trye again later',
        });

    }
}