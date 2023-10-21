const ToDoModel = require("../models/ToDoModel");
const { verifyToken } = require("../helpers/generateToken");

// Obtenemos todas las tareas
const getTodo = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    const tokenData = await verifyToken(token);

    if (!tokenData) {
      res.status(401);
      res.send({
        msg: "No autorizado",
      });
      return;
    }
    const toDo = await ToDoModel.find();
    res.status(200);
    res.send(toDo);
  } catch (error) {
    res.status(404);
    res.send({
      msg: "Ocurrio un error inesperado.",
    });
  }
};
// Guardamos una tarea
const saveToDo = async (req, res) => {
  try {
    const { text } = req.body;
    const token = req.headers.authorization?.split(" ")[1];
    const tokenData = await verifyToken(token);
    if (!tokenData) {
      res.status(401);
      res.send({
        msg: "No autorizado",
      });
      return;
    }
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
// Actualizamos una tarea
const updateTodo = async (req, res) => {
  try {
    const { _id, text } = req.body;
    const token = req.headers.authorization?.split(" ")[1];
    const tokenData = await verifyToken(token);
    if (!tokenData) {
      res.status(401);
      res.send({
        msg: "No autorizado",
      });
      return;
    }
    const data = await ToDoModel.findByIdAndUpdate(_id, { text });
    res.send({
      _id: data._id,
      text: text,
    });
  } catch (error) {
    res.status(404);
    res.send({
      msg: "Ocurrio un error al actualizar la tarea.",
      error,
    });
  }
};
// Eliminamos una tarea
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const token = req.headers.authorization?.split(" ")[1];
    const tokenData = await verifyToken(token);
    if (!tokenData) {
      res.status(401);
      res.send({
        msg: "No autorizado",
      });
      return;
    }
    await ToDoModel.findByIdAndDelete(id);
    res.status(200);
    res.send({
      _id: id,
    });
  } catch (error) {
    res.status(404);
    res.send({
      msg: "Ocurrio un error al eliminar la tarea.",
      error,
    });
  }
};
// Cambiamos el estado de una tarea
const changeCompleted = async (req, res) => {
  try {
    const { _id, completed } = req.body;
    const token = req.headers.authorization?.split(" ")[1];
    console.log(token);
    const tokenData = await verifyToken(token);
    if (!tokenData) {
      res.status(401);
      res.send({
        msg: "No autorizado",
      });
      return;
    }
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
module.exports = {
  getTodo,
  saveToDo,
  updateTodo,
  deleteTodo,
  changeCompleted,
};
