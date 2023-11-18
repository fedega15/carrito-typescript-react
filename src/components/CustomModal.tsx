// CustomModal.tsx

import React from "react";
import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";

interface CustomModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  isSmallScreen: boolean;
  children: React.ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({
  isOpen,
  onRequestClose,
  isSmallScreen,
  children,
}) => {
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      top: "55%",
      left: "80%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-100%, -50%)",
      width: "60%",
      maxHeight: "450px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "20px",
      overflow: "auto",
    },
  };

  if (isSmallScreen) {
    customStyles.content = {
      ...customStyles.content,
      width: "100%",
      left: "0",
      transform: "none",
      top: "17%",
    };
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Cart Modal"
    >
      <button className="product__2" onClick={onRequestClose}>
        <IoMdClose />
      </button>
      {children}
    </Modal>
  );
};

export default CustomModal;
