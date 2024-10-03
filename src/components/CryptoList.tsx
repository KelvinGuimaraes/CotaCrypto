import React from 'react';
import { requi } from '../hooks/requi';
import { Link } from 'react-router-dom';

const CryptoList: React.FC = () => {
  const { cryptos, loading, error } = requi();

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <header>
        <h2>CotaCripto</h2>
      </header>
      
      <article>

        <div id='box'>
          <thead>
            <tr id='let'>
              <th>Nome</th>
              <th>Preço</th>
              <th>Variação (24h)</th>
            </tr>
          </thead>

          <tbody>
            {cryptos.map((coin: { id: React.Key | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; current_price: number; price_change_percentage_24h: number; }) => (
              <tr id='let' key={coin.id}>
                <td>
                    <Link to={`/details/${coin.id}`}>{coin.name}</Link>
                </td>
                <td>${coin.current_price.toFixed(2)}</td>
                <td>{coin.price_change_percentage_24h.toFixed(2)}%</td>
              </tr>
            ))}
          </tbody>
        </div>

      </article>
    </div>
  );
};

export default CryptoList;