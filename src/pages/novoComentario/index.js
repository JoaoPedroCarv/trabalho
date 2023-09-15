import React, { useState } from "react";
import { Link } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";
import './novoComentario.css'

function CriarComentario() {
    const [nomePais, setNomePais] = useState("");
    const [experiencia, setExperiencia] = useState("");
    const [valor, setValor] = useState(0);
    const [dias, setDias] = useState(0);
    const [comentarioCriado, setComentarioCriado] = useState(false);

    const criarNovoComentario = async (e) => {
        e.preventDefault();

        try {
            const novoComentario = {
                nomePais,
                experiencia,
                valor,
                Dias: dias
            };

            await addDoc(collection(db, "notas"), novoComentario);
            setComentarioCriado(true);
            setNomePais("");
            setExperiencia("");
            setValor(0);
            setDias(0);
        } catch (error) {
            console.error("Erro ao criar o comentário:", error);
        }
    };

    return (
        <div className="princ">
            <h1>Criar um novo comentário</h1>
            <form onSubmit={criarNovoComentario}>
                <label>
                    Nome do País:
                    <input
                        type="text"
                        value={nomePais}
                        onChange={(e) => setNomePais(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Experiência:
                    <input
                        type="text"
                        value={experiencia}
                        onChange={(e) => setExperiencia(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Valor:
                    <input
                        type="number"
                        value={valor}
                        onChange={(e) => setValor(parseFloat(e.target.value))}
                    />
                </label>
                <br />
                <label>
                    Dias:
                    <input
                        type="number"
                        value={dias}
                        onChange={(e) => setDias(parseInt(e.target.value))}
                    />
                </label>
                <br />
                <button type="submit">Criar novo Comentário</button>
            </form>

            {comentarioCriado && (
                <div>
                    <p>Novo comentário criado com sucesso!</p>
                    <Link to="/verComentarios">Voltar para a Lista de Comentários</Link>
                </div>
            )}
        </div>
    );
}

export default CriarComentario;
