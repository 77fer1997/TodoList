import { FC, useEffect } from "react";
import { InputToDo } from "./components/UI/InputToDo";
import styles from "./style.module.css";
import { ToDoList } from "./components/UI/ToDoList";

import { useContext } from "react";
import { TodoContext } from "../../context/todos/TodoContext";
import { getToken } from "../../services/auth";
import { persistLocalStorage } from "../../utils/localStorage";
const Home: FC = () => {
  const { todos, getTodos } = useContext(TodoContext);
  useEffect(() => {
    getToken().then(({ token }) => {
      console.log(token);
      persistLocalStorage("token", token);
      getTodos();
    });
  }, []);

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>TODO</h1>
      <InputToDo />
      {todos?.length === 0 ? (
        <h2 className={styles.noTasks}>No hay tareas</h2>
      ) : (
        <ToDoList toDoList={todos} />
      )}
    </main>
  );
};

export default Home;
