import { FC, useContext, useState, Suspense } from "react";

import styles from "./style.module.css";
import { lazily } from "react-lazily";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

import { RadioButton } from "@components/RadioButton";
import { TodoContext } from "@context/todos/TodoContext";
import { changeCompletedService } from "@services/todo";

interface IProps {
  text: string;
  _id: string;
  completed: boolean;
  style: React.CSSProperties;
}
//Importamos dinamicamente el componente EditModal para que no se cargue antes de utilizarlo
const { EditModal } = lazily(() => import("../EditModal"));

export const ToDo: FC<IProps> = ({ text, _id, completed, style }) => {
  const [checked, setChecked] = useState<boolean>(completed);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);

  const { deleteTodo } = useContext(TodoContext);

  const handleToogleEditModal = () => {
    setShowEditModal(!showEditModal);
  };
  const handleDelete = (id: string) => {
    deleteTodo(id);
  };
  const handleOnChecked = () => {
    setChecked(!checked);
    changeCompletedService(_id, !checked);
  };

  return (
    <div style={style} className={styles.container}>
      <RadioButton
        id={_id}
        label={text}
        checked={checked}
        setChecked={handleOnChecked}
      />
      <div className={styles.actionContainer}>
        <AiFillEdit
          onClick={handleToogleEditModal}
          className={styles.editIcon}
        />
        <h1>{checked}</h1>
        <AiFillDelete
          onClick={() => handleDelete(_id)}
          className={styles.deleteIcon}
        />
      </div>

      {/* Edit Modal */}
      {showEditModal && (
        <Suspense fallback={<div>Loading...</div>}>
          <EditModal
            showEditModal={showEditModal}
            setShowEditModal={setShowEditModal}
            _id={_id}
          />
        </Suspense>
      )}
      {/* End Edit Modal */}
    </div>
  );
};
