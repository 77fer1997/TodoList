import { useContext, useState } from "react";
import { Modal, ModalHeader, ModalBody } from "@components/Modal";
import { toDoValidation } from "@validations/ToDoValidation";
import { TodoContext } from "@context/todos/TodoContext";
import { Input } from "@components/Input";
import styles from "./style.module.css";

interface IProps {
  showEditModal: boolean;
  setShowEditModal: (showEditModal: boolean) => void;
  _id: string;
}
export const EditModal = ({ showEditModal, setShowEditModal, _id }: IProps) => {
  const [inputText, setInputText] = useState<string>("");
  const { updateTodo } = useContext(TodoContext);
  const handleEdit = () => {
    if (!toDoValidation(inputText).status) return;
    updateTodo(_id, inputText);
    setShowEditModal(!showEditModal);
  };
  return (
    <Modal
      showModal={showEditModal}
      setShowModal={setShowEditModal}
      actionButton={handleEdit}
    >
      <ModalHeader>
        <h4>Editar Tarea</h4>
      </ModalHeader>
      <ModalBody>
        <Input
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
          type="text"
          placeholder="Ingresa una tarea"
        />
        {!toDoValidation(inputText).status && (
          <p className={styles.error}>{toDoValidation(inputText).msg}</p>
        )}
      </ModalBody>
    </Modal>
  );
};
