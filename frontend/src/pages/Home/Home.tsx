import { FC } from "react";
import { InputToDo } from "./components/UI/InputToDo";
import styles from "./style.module.css";
import { ToDoList } from "./components/UI/ToDoList";
const Home: FC = () => {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>TODO</h1>
      <InputToDo />
      <ToDoList
        toDoList={[
          { id: "123", title: "Barrer", completed: true },
          { id: "1234", title: "Trapear el piso", completed: false },
          { id: "1232s", title: "Trapear el pisoaa", completed: false },
          { id: "12322s", title: "Trapear el pisoaa", completed: false },
          { id: "1232as", title: "Trapear el pisoaa", completed: false },
          { id: "1232as123", title: "Trapear el pisoaa", completed: false },
        ]}
      />
    </main>
  );
};

export default Home;
