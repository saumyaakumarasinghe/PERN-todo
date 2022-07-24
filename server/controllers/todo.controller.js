const pool = require("../db");

const addTodo = async(req, res, next) => {
    try{
        const {description} = req.body;
        const query = 'INSERT INTO todo (description) VALUES ($1) RETURNING *';

        const newTodo = await pool.query(query, [description]);
        console.log("ADDED SUCCESSFULLY!");
        res.json(newTodo.rows[0]);
    }
    catch (err){
        err => console.log(err);
        next();
    }
}

const viewTodo = async(req, res, next) => {
    try{
        const query = "SELECT * FROM todo" ;

        const findAll = await pool.query(query);
        res.status(200).send(findAll.rows);
        // console.log(findAll);
        console.log("SUCCESSFULLY RETRIEVED!");
    }
    catch (err){
        err => console.log(err);
        next();
    }
};

const viewTodoById = async(req, res, next) => {
    try{
        const {id} = req.params;
        const query = "SELECT * FROM todo WHERE todo_id = $1";

        const findOne = await pool.query(query, [id]);
        res.status(200).send(findOne.rows);
        // console.log(findOne);
        console.log("SUCCESSFULLY RETRIEVED ONE!");
    }
    catch (err){
        err => console.log(err);
        next();
    }
};

const updateTodo = async(req, res, next) => {
    try{
        const {id} = req.params;
        const {description} = req.body;
        const query = "UPDATE todo SET description = $1 WHERE todo_id = $2";

        const updateOne = await pool.query(query, [description, id]);
        res.status(200).send({message: "Successfully updated"});
        // console.log(updateOne);
        console.log("SUCCESSFULLY UPDATED ONE!");
    }
    catch (err){
        err => console.log(err);
        next();
    }
};

const deleteTodo = async(req, res, next) => {
    try{
        const {id} = req.params;
        const query = "DELETE FROM todo WHERE todo_id = $1";

        const deleteOne = await pool.query(query, [id]);
        res.status(200).send({message: "Successfully deleted"});
        // console.log(deleteOne);
        console.log("SUCCESSFULLY DELETED ONE!");
    }
    catch (err){
        err => console.log(err);
        next();
    }
};

module.exports = { 
    addTodo,
    viewTodo,
    viewTodoById,
    updateTodo,
    deleteTodo
};