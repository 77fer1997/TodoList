import { FC } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import styles from "./style.module.css";
export const InputToDo: FC = () => {
  return (
    <div className={styles.container}>
      <input
        className={styles.todoInput}
        type="text"
        placeholder="What needs to be done?"
      />
      <AiOutlinePlusCircle className={styles.icon} />
    </div>
  );
};
