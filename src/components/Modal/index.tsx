import ReactDOM from "react-dom";
import type { PropsWithChildren } from "react";
import styles from "./Modal.module.scss";

type ModalProps = {
  onClose: () => void;
};

const modalRoot = document.getElementById("react-modals");

export const Modal = ({
  onClose,
  children,
}: PropsWithChildren<ModalProps>) => {
  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ✖
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};
