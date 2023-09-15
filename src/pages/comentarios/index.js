import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";
import './comentarios.css'
import { Link } from "react-router-dom";

function Comentarios() {
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    consultarComentarios();
  }, []);

  async function consultarComentarios() {
    onSnapshot(collection(db, "comentarios"), (snapshot) => {
      let listaComentarios = [];
      snapshot.forEach((doc) => {
        listaComentarios.push({
          id: doc.id,
          nomePais: doc.data().nomePais,
          experiencia: doc.data().experiencia,
          valor: doc.data().valor,
          Dias: doc.data().Dias
        });
      });
      setComentarios(listaComentarios);
    });
  }

  return (
    <div className="titulo">
      <h1>Comentários</h1>
      <div className="comentarios">
        {comentarios.map((comentario) => (
          <div key={comentario.id} className="comentario">
            <h2>{comentario.nomePais}</h2>
            <p>{comentario.experiencia}</p>
            <p>{comentario.valor}</p>
            <p>{comentario.Dias}</p>
          </div>
        ))}
      </div>
      <Link className="link" to='/novoComentario'>Adicione um comentário</Link>
    </div >
  );
}

export default Comentarios;
