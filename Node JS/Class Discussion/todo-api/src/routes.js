import { Router } from "express";

import * as endpoints from "./constants/endpoints";
import * as userController from "./controllers/user";
import * as todoController from "./controllers/todo";
import { validateUserCreation } from "./schemas/user";
import { validateAddTodo, validateUpdateTodo } from "./schemas/todo";

const router = Router();

//route banayeko
router.get("/", (req, res, next) => {
  res.json({
    name: "todo-api",
    version: "1.0.0",
  });
});

//post ko lagi
router.post(
  endpoints.CREATE_USER,
  validateUserCreation,
  userController.createUser
);

router.get(endpoints.GET_ALL_TODOS, todoController.getAllTodos);

router.get(endpoints.GET_TODO_BY_ID, todoController.getTodoById);

router.post(endpoints.ADD_TODO, validateAddTodo, todoController.addTodo);

router.delete(endpoints.REMOVE_TODO, todoController.removeTodo);

router.put(
  endpoints.UPDATE_TODO,
  validateUpdateTodo,
  todoController.updateTodo
);

export default router;
