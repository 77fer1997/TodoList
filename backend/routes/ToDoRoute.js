const { Router } = require("express");
const {
  getTodo,
  saveToDo,
  updateTodo,
  deleteTodo,
  changeCompleted,
} = require("../controllers/ToDoController");

const router = Router();

router.get("/", getTodo);
router.post("/save", saveToDo);
router.patch("/update", updateTodo);
router.delete("/delete", deleteTodo);
router.patch("/changeCompleted", changeCompleted);
module.exports = router;
