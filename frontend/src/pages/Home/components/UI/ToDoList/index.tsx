import { FC } from "react";
import { IToDo } from "../../../../../models/ToDo";
import styles from "./style.module.css";
import { List, AutoSizer } from "react-virtualized";
import { ToDo } from "../ToDo";
interface IProps {
  toDoList: IToDo[] | null;
}
export const ToDoList: FC<IProps> = ({ toDoList }) => {
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

      {/* {toDoList?.map((toDo) => {
        return (
          <ToDo
            key={toDo._id}
            _id={toDo._id}
            text={toDo.text}
            completed={toDo.completed}
          />
        );
      })} */}
    </div>
  );
};
