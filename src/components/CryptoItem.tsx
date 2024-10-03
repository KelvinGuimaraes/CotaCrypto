import React from 'react';
import { Link } from 'react-router-dom';
import { usebest } from '../context/FavoritesContext';

interface CryptoItemProps {
  crypto: {
    id: string;
    name: string;
    symbol: string;
    current_price: number;
    price_change_percentage_24h: number;
  };
}

const CryptoItem: React.FC<CryptoItemProps> = ({ crypto }) => {
  const { favorites, addFavorite, removeFavorite } = usebest();
  const isFavorited = favorites.includes(crypto.id);

  const handleFavoriteClick = () => {
    if (isFavorited) {
      removeFavorite(crypto.id);
    } else {
      addFavorite(crypto.id);
    }
  };

  return (
    <div className="crypto-item">
      <Link to={`/crypto/${crypto.id}`}>
        <h2>{crypto.name} ({crypto.symbol.toUpperCase()})</h2>
      </Link>
      <p>Preço: ${crypto.current_price}</p>
      <p>Variação 24h: {crypto.price_change_percentage_24h}%</p>
      <button onClick={handleFavoriteClick}>
        {isFavorited ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
      </button>
    </div>
  );
};

export default CryptoItem;
