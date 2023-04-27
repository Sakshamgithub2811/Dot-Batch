//importing model
const { response } = require("express");
const Todo = require("../models/Todo");


exports.getTodo = async (req, res) => {
    try {
        const todos = await Todo.find({});

        res.status(200).json({
            success: true,
            data: todos,
            message: "Entire todo data is fetched"
        });
    }
    catch (err) {
        console.log(err);
        response.status(500).json({
            success: false,
            data: "internal server error",
            message: err.message
        });

    }
}


exports.getTodoById = async (req, res) => {
    try {
        //  id fetching
        const id = req.params.id;
        const todo = await Todo.findById({ _id: id });

        if (!todo) {
            res.status(404).json({
                success: true,
                data: todo,
                message: "NO data found with given id"
            })
        }
        res.status(200).json({
            success: true,
            data: todo,
            message: `todo ${id} data successfully fetched`
        });
    }
    catch (err) {
        console.log(err);
        response.status(500).json({
            success: false,
            data: "internal server error",
            message: err.message
        });

    }
}