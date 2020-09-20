import React from "react";
import Dialog from "rc-dialog";

import "rc-dialog/assets/index.css";

interface ModalProps {
  visible?: boolean, 
  onClose?: () => void 
}

const Modal: React.FC<ModalProps> = ({ visible, children, onClose }) => {
  return (
    <Dialog
      visible={visible}
      onClose={onClose}
      animation="zoom"
      maskAnimation="fade"
      forceRender
    >
      {children}
    </Dialog>
  );
};

export default Modal;
