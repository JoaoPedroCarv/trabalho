import React, { useState } from "react";
import Modal from "react-modal";
import './editar.css'

Modal.setAppElement("#root"); // Define o elemento raiz do aplicativo para acessibilidade

function EditarComentarioModal({ isOpen, onRequestClose, comentario, onSave }) {
  const [novoComentario, setNovoComentario] = useState(comentario.experiencia);

  function handleSave() {
    onSave(comentario, novoComentario);
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Editar Comentário"
      className="modal"
      overlayClassName="overlay"
    >
      <h2>Editar Comentário</h2>
      <textarea
        value={novoComentario}
        onChange={(e) => setNovoComentario(e.target.value)}
      ></textarea>
      <button onClick={handleSave}>Salvar</button>
      <button onClick={onRequestClose}>Cancelar</button>
    </Modal>
  );
}

export default EditarComentarioModal;
