import React from "react";
import { IToDo } from "@models/ToDo";
import styles from "./style.module.css";
import { List, AutoSizer } from "react-virtualized";
import { ToDo } from "../ToDo";
interface IProps {
  toDoList: IToDo[] | null;
}
export const ToDoList: React.FC<IProps> = React.memo(({ toDoList }) => {
  return (
    <div className={styles.container}>
      <AutoSizer>
        {({ width, height }) => {
          return (
            <List
              width={width}
              height={height}
              rowHeight={60}
              rowCount={toDoList?.length || 0}
              rowRenderer={({ index, key, style }) => {
                const todo = toDoList![index];
                return (
                  <ToDo
                    key={key}
                    _id={todo._id}
                    text={todo.text}
                    completed={todo.completed}
                    style={style}
                  />
                );
              }}
            />
          );
        }}
      </AutoSizer>
    </div>
  );
});
