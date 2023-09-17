import React, { useState } from "react";
import { connect } from "react-redux";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";

function EditarComentario({
  comentario,
  onClose,
  onUpdate,
  incremento,
  decremento,
}) {
  const [experiencia, setExperiencia] = useState(comentario.experiencia);
  const [valor, setValor] = useState(comentario.valor);
  const [Dias, setDias] = useState(comentario.Dias);
  const [nomePais, setNomePais] = useState(comentario.nomePais);

  const editarComentario = async (e) => {
    e.preventDefault();

    try {
      const comentarioAtualizado = {
        ...comentario,
        experiencia,
        valor,
        Dias,
        nomePais,
      };

      const docRef = doc(db, "comentarios", comentario.id);
      await updateDoc(docRef, comentarioAtualizado);

      onUpdate(comentarioAtualizado); // Atualiza o comentário na lista
      onClose(); // Fecha o pop-up
    } catch (error) {
      console.error("Erro ao editar o comentário:", error);
    }
  };

  return (
    <div className="editar-comentario">
      <h2>Editar Comentário</h2>
      <form onSubmit={editarComentario}>
        <label>
          Experiência:
          <input
            type="text"
            value={experiencia}
            onChange={(e) => setExperiencia(e.target.value)}
          />
        </label>
        <label>
          Valor:
          <input
            type="text"
            value={valor}
            onChange={(e) => setValor(parseFloat(e.target.value))}
          />
        </label>
        <label>
          Dias:
          <input
            type="text"
            value={Dias}
            onChange={(e) => setDias(parseInt(e.target.value))}
          />
          <button type="button" onClick={incremento}>
            + Dia
          </button>
          <button type="button" onClick={decremento}>
            - Dia
          </button>
        </label>
        <label>
          Nome do País:
          <input
            type="text"
            value={nomePais}
            onChange={(e) => setNomePais(e.target.value)}
          />
        </label>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

const mapAssociate = (dispatch) => {
  return {
    incremento: () => dispatch({ type: "INCREMENTO" }),
    decremento: () => dispatch({ type: "DECREMENTO" }),
  };
};

export default connect(null, mapAssociate)(EditarComentario);
