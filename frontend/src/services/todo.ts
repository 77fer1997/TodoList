import axios from "axios";
import { GET_TODO_URL } from "../constants/api";
export const getTodosService = async () => {
  try {
    const response = await axios.get(`${GET_TODO_URL}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const addTodosService = async (text: string) => {
  try {
    const response = await axios.post(`${GET_TODO_URL}`, { text });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const deleteTodoService = async (id: string) => {
  try {
    const response = await axios.delete(`${GET_TODO_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const updateTodoService = async (id: string, text: string) => {
  try {
    const response = await axios.patch(`${GET_TODO_URL}`, {
      _id: id,
      text,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const changeCompletedService = async (
  id: string,
  completed: boolean
) => {
  try {
    const response = await axios.patch(`${GET_TODO_URL}/changeCompleted`, {
      _id: id,
      completed,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
