import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface PriceData {
  prices: [number, number][];
}

const CryptoDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [priceData, setPriceData] = useState<PriceData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPriceData = async () => {
      try {
        const response = await axios.get<PriceData>(
          `https://api.coingecko.com/api/v3/coins/${id}/market_chart`, 
          {
            params: {
              vs_currency: 'usd',
              days: '7',
            },
          }
        );
        setPriceData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar dados de preço:', error);
        setLoading(false);
      }
    };

    fetchPriceData();
  }, [id]);

  if (loading) {
    return <p>Carregando dados da criptomoeda...</p>;
  }

  if (!priceData) {
    return <p>Erro ao carregar dados.</p>;
  }

  const chartData = {
    labels: priceData.prices.map((price) => {
      const date = new Date(price[0]);
      return `${date.getDate()}/${date.getMonth() + 1} ${date.getHours()}:00`;
    }),
    datasets: [
      {
        label: 'Preço (USD)',
        data: priceData.prices.map((price) => price[1]),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div>
      <h1>Detalhes da Criptomoeda</h1>
      <Line data={chartData} />
    </div>
  );
};

export default CryptoDetails;
