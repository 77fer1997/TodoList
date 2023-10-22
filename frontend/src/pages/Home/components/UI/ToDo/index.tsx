import { FC, useContext, useState } from "react";
import styles from "./style.module.css";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { RadioButton } from "../../../../../components/RadioButton";
import { Modal } from "../../../../../components/Modal";
import { Input } from "../../../../../components/Input";
import { TodoContext } from "../../../../../context/todos/TodoContext";
import { changeCompletedService } from "../../../../../services/todo";
import { toDoValidation } from "../../../../../validations/ToDoValidation";
interface IProps {
  text: string;
  _id: string;
  completed: boolean;
}
export const ToDo: FC<IProps> = ({ text, _id, completed }) => {
  console.log("completed" + completed);
  const [checked, setChecked] = useState<boolean>(completed);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>("");

  const { deleteTodo, updateTodo } = useContext(TodoContext);

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
  const handleEdit = () => {
    if (!toDoValidation(inputText).status) return;
    updateTodo(_id, inputText);
    setShowEditModal(!showEditModal);
  };
  return (
    <div className={styles.container}>
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
      <Modal
        showModal={showEditModal}
        setShowModal={setShowEditModal}
        actionButton={handleEdit}
      >
        <Modal.Header>
          <h4>Editar Tarea</h4>
        </Modal.Header>
        <Modal.Body>
          <Input
            onChange={(e) => setInputText(e.target.value)}
            value={inputText}
            type="text"
            placeholder="Ingresa una tarea"
          />
          {!toDoValidation(inputText).status && (
            <p className={styles.error}>{toDoValidation(inputText).msg}</p>
          )}
        </Modal.Body>
      </Modal>
      {/* End Edit Modal */}
    </div>
  );
};
