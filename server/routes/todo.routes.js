const express = require("express");

const router = express.Router();   

const todoController = require("../controllers/todo.controller");

router.post("", todoController.addTodo);
router.get("", todoController.viewTodo);
router.get("/:id", todoController.viewTodoById);
router.put("/:id", todoController.updateTodo);
router.delete("/:id", todoController.deleteTodo);

module.exports = router;