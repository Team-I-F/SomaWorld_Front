import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root') 

const ImageUploadModal = ({ isOpen, onRequestClose, onFileChange }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Upload"
    >
      <h2>Upload Image</h2>
      <input type="file" onChange={onFileChange} />
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default ImageUploadModal;
