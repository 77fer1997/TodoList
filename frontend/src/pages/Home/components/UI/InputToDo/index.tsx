import { FC, useContext, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import styles from "./style.module.css";
import { TodoContext } from "../../../../../context/todos/TodoContext";
import { toDoValidation } from "../../../../../validations/ToDoValidation";

export const InputToDo: FC = () => {
  const [task, setTask] = useState<string>("");

  const { addTodo } = useContext(TodoContext);

  const handleAddTodo = (task: string) => {
    if (toDoValidation(task).status) {
      addTodo(task);
      setTask("");
    }
    return;
  };
  return (
    <>
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
      {!toDoValidation(task).status && (
        <p className={styles.error}>{toDoValidation(task).msg}</p>
      )}
    </>
  );
};
