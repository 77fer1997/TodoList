import { createContext } from "react";
import { IToDo } from "@models/ToDo";

interface TodoContextProps {
  todos: IToDo[];
  getTodos: () => void;
  addTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (id: string, text: string) => void;
  changeCompleted: (id: string, completed: boolean) => void;
}
export const TodoContext = createContext({} as TodoContextProps);
