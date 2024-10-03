import React from 'react';
import { usebest } from '../context/FavoritesContext';
import CryptoItem from './CryptoItem';
import { requi } from '../hooks/requi';

const best: React.FC = () => {
  const { favorites } = usebest();
  const { cryptos, loading, error } = requi();

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  const favoriteCryptos = cryptos.filter((crypto) => favorites.includes(crypto.id));

  return (
    <div id='favoritos'>
      <h1>Favoritos</h1>
      {favoriteCryptos.length > 0 ? (
        favoriteCryptos.map((crypto) => <CryptoItem key={crypto.id} crypto={crypto} />)
      ) : (
        <p>Nenhuma criptomoeda favoritada.</p>
      )}
    </div>
  );
};

export default best;
