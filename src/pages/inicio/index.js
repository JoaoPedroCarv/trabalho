import React, { useState } from 'react';
import axios from 'axios';
import './style.css'

function Inicio() {
  const [pesquisa, setPesquisa] = useState('');
  const [pais, setPais] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);

    try {
      const response = await axios.get(`https://restcountries.com/v3.1/name/${pesquisa}`);
      setPais(response.data);
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
        <button className='botao' onClick={handleSearch}>Pesquisar</button>
      </div>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div>
        {pais.map((pais) => (
          <div className='pais' key={pais.cca2}>
            <img 
              src={pais.flags.png}
              
              width="150"
              height="110"
            />
            <h2 className='nomePais'>{pais.name.common}</h2>
            
          </div>
        ))}
      </div>
    )}
  </div>
  );
}

export default Inicio;