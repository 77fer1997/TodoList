const { Router } = require("express");
const {
  getTodo,
  saveToDo,
  updateTodo,
  deleteTodo,
  changeCompleted,
} = require("../controllers/ToDoController");
const { validateCreate } = require("../validators/todo");
const router = Router();

router.get("/", getTodo);
router.post("/", validateCreate, saveToDo);
router.patch("/", validateCreate, updateTodo);
router.delete("/:id", deleteTodo);
router.patch("/changeCompleted", changeCompleted);
module.exports = router;
