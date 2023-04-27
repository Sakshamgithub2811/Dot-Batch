const Todo = require("../models/Todo");

//define the router to handle
exports.updateTodo = async(req,res)=>{
    try{
         const {id} = req.params;
         const {title,description} = req.body;
         console.log("helo");
         const todo = await Todo.findByIdAndUpdate(
            {_id:id},
            {title, description, updatedAt: Date.now()},
         )
         console.log("helo");
         res.status(200)
         .json(
             {
                 success:true,
                 data:todo,
                 message:"entry updated succesfully gojo"
             }
         );
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success: false,
            data: "internal server error",
            message: err.message
        });
    }
}