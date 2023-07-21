const bcrypt = require("bcrypt");
const User = require("../Model/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();


//signup route handler
exports.signup = async (req,res) => {
    try{
        //get data
        const {name, email, password, role} = req.body;
        //check if user already exist
        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(400).json({
                success:false,
                message:'User already Exists',
            });
        }

        //secure password
        let hashedPassword;
        try{
            hashedPassword = await bcrypt.hash(password, 10);
        }
        catch(err) {
            return res.status(500).json({
                success:false,
                message:'Error inn hashing Password',
            });
        }

        //create entry for User
        const user = await User.create({
            name,email,password:hashedPassword,role
        })

        return res.status(200).json({
            success:true,
            message:'User Created Successfully',
        });

    }
    catch(error) {
        console.error(error);
        return res.status(500).json({
            success:false,
            message:'User cannot be registered, please try again later',
        });
    }
}

//Login  
exports.login = async(req,res)=>{
    try{
        //data fetch 
        const {email,password} = req.body;
        //validate on email and password
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:'please fill al the details carefully'

            });

        }

        let user = await User.findOne({email});
        //if not a registred user
        if(!user){
            return res.status(401).json({
                success:false,
                message:'user is not registred'
            });

        }

        const payload = {
            email:user.email,
            id:user._id,
            role:user.role,
        };

        //verify password & generate a jwt token 
        if(await bcrypt.compare(password,user.password)){
            //password match 
            let token = jwt.sign(payload,
                process.env.JWT_SECRET,{expiresIn:"2h",});
                
                user = user.toObject();
                console.log(typeof(user)); 
                user.token = token;
                user.password = undefined;
               
                const options = {
                    expires:new Date(Date.now() + 3*24*60*60*1000),
                    httpOnly:true,

                }

                // res.cookie("token",token,options).status(200).json({
                //     success:true,
                //     token,
                //     user,
                //     message:"User logged in succesfully",
                // });

                res.status(200).json({
                    success:true,
                    token,
                    user,
                    message:"User logged in succesfully",
                });

        }
        else{
            return res.status(403).json({
                success:false,
                message:"Password Incorrect"
            });
        }

    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"login failure"
        });

    }
}
