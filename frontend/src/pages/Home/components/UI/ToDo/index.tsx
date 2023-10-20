import { FC, useState } from "react";
import styles from "./style.module.css";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { RadioButton } from "../../../../../components/RadioButton";
import { Modal } from "../../../../../components/Modal";
import { Input } from "../../../../../components/Input";
interface IProps {
  title: string;
  id: string;
}
export const ToDo: FC<IProps> = ({ title, id }) => {
  const [checked, setChecked] = useState<boolean>(false);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);

  const handleToogleEditModal = () => {
    setShowEditModal(!showEditModal);
  };
  return (
    <div className={styles.container}>
      <RadioButton
        id={id}
        label={title}
        checked={checked}
        setChecked={setChecked}
      />
      <div className={styles.actionContainer}>
        <AiFillEdit
          onClick={handleToogleEditModal}
          className={styles.editIcon}
        />
        <AiFillDelete className={styles.deleteIcon} />
      </div>

      {/* Edit Modal */}
      <Modal showModal={showEditModal} setShowModal={setShowEditModal}>
        <Modal.Header>
          <h4>Agregar Tarea</h4>
        </Modal.Header>
        <Modal.Body>
          <Input type="text" placeholder="Ingresa una tarea" />
        </Modal.Body>
      </Modal>
      {/* End Edit Modal */}
    </div>
  );
};
