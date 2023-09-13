import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './inicioStyle.css'

function Inicio() {
  const [pesquisa, setPesquisa] = useState('');
  const [pais, setPais] = useState([]);
  const [loading, setLoading] = useState(false);

  const pesquisado = async () => {
    setLoading(true);

    try {
      const resposta = await axios.get(`https://restcountries.com/v3.1/name/${pesquisa}`);
      setPais(resposta.data);
    } catch (error) {
      console.error('Erro ao buscar países:', error);
    }

    setLoading(false);
  };

  return (
    <div className='principal'>
      <div className='coluna'>
        <h1>Lista de Países</h1>
        <input
          type="text"
          placeholder="Digite o nome do país"
          value={pesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
          className='pesquisar'
        />
        <button className='botao' onClick={pesquisado}>Pesquisar</button>
      </div>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div>
          {pais.map((pais) => (
            <div className='pais' key={pais.cca2}>
              <Link className='link' to={`/detalhes/${pais.cca2}`}>
                <img
                  src={pais.flags.png}
                  alt=''
                  width="150"
                  height="100"
                />
                <h2 className='nomePais'>{pais.name.common}</h2>
              </Link>
            </div>
          ))}
        </div>
      )
      }
    </div >
  );
}

export default Inicio;

//<h2 className='nomePais'>{pais.name.common}</h2>