import { useState, useEffect } from 'react';
import axios from 'axios';

interface Crypto {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
}

export const requi = () => {
  const [cryptos, setCryptos] = useState<Crypto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets',
          {
            params: {
              vs_currency: 'usd',
              order: 'market_cap_desc',
              per_page: 10,
              page: 1,
              price_change_percentage: '24h',
            },
          }
        );
        setCryptos(response.data);
      } catch (err) {
        setError('Erro ao buscar dados da API');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { cryptos, loading, error };
};
