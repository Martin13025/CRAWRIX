import React from "react";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  title: string;
  content: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  closeModal,
  title,
  content,
}) => {
  return (
    <div className={`modal-overlay ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <div className="modal-close-bar" onClick={closeModal}></div>
        <h3>{title}</h3>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default Modal;
