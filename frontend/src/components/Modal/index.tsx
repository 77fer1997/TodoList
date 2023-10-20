import { createPortal } from "react-dom";
import styles from "./style.module.css";
import { AiOutlineClose } from "react-icons/ai";

interface IPropsModal {
  children: React.ReactNode;
  Header?: React.ReactNode;
  Body?: React.ReactNode;
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}

export const Modal = ({ children, showModal, setShowModal }: IPropsModal) => {
  console.log(showModal);
  return (
    <>
      {showModal &&
        createPortal(
          <div className={styles.overlay}>
            <div className={styles.container}>
              <div className={styles.closeButtonContainer}>
                <button
                  onClick={() => setShowModal(!showModal)}
                  className={styles.closeButton}
                >
                  <AiOutlineClose />
                </button>
              </div>
              {children}
              <div className={styles.buttonContainer}>
                <button className={styles.button}>Agregar</button>
              </div>
            </div>
          </div>,
          document.getElementById("modal-root") as HTMLElement
        )}
    </>
  );
};
interface IPropsModalHeader {
  children: React.ReactNode;
}
const ModalHeader = ({ children }: IPropsModalHeader) => {
  return <div className={styles.modalHeader}>{children}</div>;
};
interface IPropsModalBody {
  children: React.ReactNode;
}
const ModalBody = ({ children }: IPropsModalBody) => {
  return <div className={styles.modalBodyContainer}>{children}</div>;
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
