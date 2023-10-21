import { FC, useContext, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import styles from "./style.module.css";
import { TodoContext } from "../../../../../context/todos/TodoContext";

export const InputToDo: FC = () => {
  const [task, setTask] = useState<string>("");

  const { addTodo } = useContext(TodoContext);

  const handleAddTodo = (task: string) => {
    console.log(task);
    addTodo(task);
    setTask("");
  };
  return (
    <div className={styles.container}>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className={styles.todoInput}
        type="text"
        placeholder="What needs to be done?"
      />
      <AiOutlinePlusCircle
        onClick={() => handleAddTodo(task)}
        className={styles.icon}
      />
    </div>
  );
};
