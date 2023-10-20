import { FC, useEffect, useState } from "react";
import { InputToDo } from "./components/UI/InputToDo";
import styles from "./style.module.css";
import { ToDoList } from "./components/UI/ToDoList";
import { getTodos } from "../../services/todo";
import { getToken } from "../../services/auth";
import { IToDo } from "../../models/ToDo";
import { persistLocalStorage } from "../../utils/localStorage";
const Home: FC = () => {
  const [toDoList, setToDoList] = useState<IToDo[]>([]);
  useEffect(() => {
    const fetchTodos = async () => {
      if (window.localStorage.getItem("token") !== null) {
        const token = window.localStorage.getItem("token") as string;
        console.log(token);
        const todos = await getTodos(token);
        setToDoList(todos);
      } else {
        const { token } = await getToken();
        console.log(token);
        persistLocalStorage("token", token);
        const todos = await getTodos(token);
        setToDoList(todos);
      }
    };
    fetchTodos();
  }, []);
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>TODO</h1>
      <InputToDo />
      {toDoList.length === 0 ? (
        <h2 className={styles.noTasks}>No hay tareas</h2>
      ) : (
        <ToDoList toDoList={toDoList} />
      )}
    </main>
  );
};

export default Home;
