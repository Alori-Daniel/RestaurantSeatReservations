import React from 'react';
import './booktablecomponent.css';

function Modal({ isOpen, onClose, content }) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        {content}
      </div>
    </div>
  );
}
export default Modal;