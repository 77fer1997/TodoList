import React, { FC } from "react";
import { IToDo } from "../../../../../models/ToDo";
import styles from "./style.module.css";
import { ToDo } from "../ToDo";
interface IProps {
  toDoList: IToDo[];
}
export const ToDoList: FC<IProps> = ({ toDoList }) => {
  return (
    <div className={styles.container}>
      {toDoList.map((toDo) => {
        return <ToDo key={toDo.id} id={toDo.id} title={toDo.title} />;
      })}
    </div>
  );
};
