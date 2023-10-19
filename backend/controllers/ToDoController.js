const ToDoModel = require("../models/ToDoModel");

module.exports.getTodo = async (req, res) => {
  try {
    const toDo = await ToDoModel.find();
    console.log(toDo);
    res.status(200);
    res.send(toDo);
  } catch (error) {
    res.status(404);
    res.send({
      msg: "Ocurrio un error inesperado.",
      error: error,
    });
  }
};
module.exports.saveToDo = async (req, res) => {
  try {
    const { text } = req.body;
    const data = await ToDoModel.create({ text });
    res.status(201);
    res.send(data);
  } catch (error) {
    res.status(404);
    res.send({
      msg: "Ocurrio un error al crear la tarea.",
      error,
    });
  }
};
module.exports.updateTodo = async (req, res) => {
  try {
    const { _id, text, completed } = req.body;
    const data = await ToDoModel.findByIdAndUpdate(_id, { text });
    res.send({
      id: data._id,
      text: text,
      completed: completed,
    });
  } catch (error) {
    res.status(404);
    res.send({
      msg: "Ocurrio un error al actualizar la tarea.",
      error,
    });
  }
};
module.exports.deleteTodo = async (req, res) => {
  try {
    const { _id } = req.body;
    await ToDoModel.findByIdAndDelete(_id);
    res.status(200);
    res.send({
      id: _id,
    });
  } catch (error) {
    res.status(404);
    res.send({
      msg: "Ocurrio un error al eliminar la tarea.",
      error,
    });
  }
};
module.exports.changeCompleted = async (req, res) => {
  try {
    const { _id, completed } = req.body;
    const data = await ToDoModel.findByIdAndUpdate(_id, { completed });
    res.status(200);
    res.send({
      id: data._id,
      completed: completed,
    });
  } catch (error) {
    res.status(404);
    res.send({
      msg: "Ocurrio un error al completar la tarea.",
      error,
    });
  }
};
