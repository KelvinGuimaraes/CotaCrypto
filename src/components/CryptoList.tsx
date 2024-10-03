import React, { useState, useEffect } from 'react';
import { requi } from '../hooks/requi';
import { Link } from 'react-router-dom';

const CryptoList: React.FC = () => {
  const { cryptos, loading, error } = requi();
  const [darkMode, setDarkMode] = useState(false);

  // Alternar dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Aplicar a classe dark-mode no body quando o dark mode estiver ativo
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <header>
        <h2>CotaCripto</h2>
        <button
          className={`theme-toggle ${darkMode ? 'dark' : ''}`}
          onClick={toggleDarkMode}
        >
          {darkMode ? 'Modo Claro' : 'Modo Escuro'}
        </button>
      </header>

      <article>
        <table id='box'>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Preço</th>
              <th>Variação (24h)</th>
            </tr>
          </thead>
          <tbody>
            {cryptos.map((coin: {
              id: React.Key | null | undefined;
              name: string;
              current_price: number;
              price_change_percentage_24h: number;
            }) => (
              <tr key={coin.id}>
                <td data-label="Nome">
                  <Link to={`/details/${coin.id}`}>{coin.name}</Link>
                </td>
                <td data-label="Preço">${coin.current_price.toFixed(2)}</td>
                <td data-label="Variação">{coin.price_change_percentage_24h.toFixed(2)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </div>
  );
};

export default CryptoList;
