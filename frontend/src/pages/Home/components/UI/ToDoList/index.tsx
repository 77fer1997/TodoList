import { FC } from "react";
import { IToDo } from "../../../../../models/ToDo";
import styles from "./style.module.css";
import { ToDo } from "../ToDo";
interface IProps {
  toDoList: IToDo[] | null;
}
export const ToDoList: FC<IProps> = ({ toDoList }) => {
  return (
    <div className={styles.container}>
      {toDoList?.map((toDo) => {
        return (
          <ToDo
            key={toDo._id}
            _id={toDo._id}
            text={toDo.text}
            completed={toDo.completed}
          />
        );
      })}
    </div>
  );
};
