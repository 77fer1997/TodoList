import { FC, useEffect } from "react";
import styles from "./style.module.css";
import { InputToDo } from "./components/UI/InputToDo";
import { ToDoList } from "./components/UI/ToDoList";
import { useContext } from "react";
import { TodoContext } from "@context/todos/TodoContext";
import { persistLocalStorage } from "@utils/localStorage";
import { getToken } from "@/services/auth";

const Home: FC = () => {
  const { todos, getTodos } = useContext(TodoContext);
  useEffect(() => {
    getToken().then(({ token }) => {
      persistLocalStorage("token", token);
      getTodos();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
