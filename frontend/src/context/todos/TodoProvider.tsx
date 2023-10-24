import { useState } from "react";
import {
  addTodosService,
  changeCompletedService,
  deleteTodoService,
  getTodosService,
  updateTodoService,
} from "@services/todo";
import { TodoContext } from "./TodoContext";
import { IToDo } from "@models/ToDo";

interface TodoProviderProps {
  children: React.ReactNode;
}

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todos, setTodos] = useState<IToDo[]>([]);
  const getTodos = async () => {
    //Si el token existe no vuelvo a hacer la petición para obtener el token
    try {
      const todos = await getTodosService();
      setTodos(todos);
    } catch (error) {
      console.log(error);
    }
  };

  /** Add Todo  */
  const addTodo = async (text: string) => {
    try {
      const todo: IToDo = await addTodosService(text);
      setTodos([todo, ...todos]);
    } catch (error) {
      console.log(error);
    }
  };
  /** Delete Todo */
  const deleteTodo = async (id: string) => {
    try {
      const deletedTodo: IToDo = await deleteTodoService(id);
      const newTodos = todos.filter((todo) => todo._id !== deletedTodo._id);
      setTodos(newTodos);
    } catch (error) {
      console.log(error);
    }
  };
  /** Update Todo */
  const updateTodo = async (id: string, text: string) => {
    try {
      const updatedTodo: IToDo = await updateTodoService(id, text);

      const newTodos = todos.map((todo) => {
        if (todo._id === updatedTodo._id) {
          return updatedTodo;
        }
        return todo;
      });
      setTodos(newTodos);
    } catch (error) {
      console.log(error);
    }
  };
  /** Change state Completed */
  const changeCompleted = async (id: string, completed: boolean) => {
    try {
      const updatedTodoCompleted: IToDo = await changeCompletedService(
        id,
        completed
      );
      const newTodos = todos.map((todo) => {
        if (todo._id === updatedTodoCompleted._id) {
          return updatedTodoCompleted;
        }
        return todo;
      });
      setTodos(newTodos);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        getTodos,
        addTodo,
        deleteTodo,
        updateTodo,
        changeCompleted,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
