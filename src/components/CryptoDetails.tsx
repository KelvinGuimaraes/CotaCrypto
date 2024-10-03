import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registra os componentes necessários do Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface PriceData {
  prices: Array<[number, number]>; // [timestamp, price]
}

const CryptoDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Obter ID da criptomoeda a partir da URL
  const [priceData, setPriceData] = useState<PriceData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPriceData = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${id}/market_chart`,
          {
            params: {
              vs_currency: 'usd',
              days: '7', // Variação dos últimos 7 dias
            },
          }
        );
        console.log(response.data); // Verificar se os dados estão sendo retornados corretamente
        setPriceData(response.data);
      } catch (err) {
        setError('Erro ao buscar dados do gráfico');
      } finally {
        setLoading(false);
      }
    };
  
    fetchPriceData();
  }, [id]);  

  if (loading) return <div>Carregando gráfico...</div>;
  if (error) return <div>{error}</div>;

  // Verificar se priceData existe antes de renderizar o gráfico
  if (!priceData || !priceData.prices) {
    return <div>Dados do gráfico não disponíveis</div>;
  }

  // Preparar os dados para o Chart.js
  const chartData = {
    labels: priceData.prices.map((price) => {
      const date = new Date(price[0]);
      return `${date.getDate()}/${date.getMonth() + 1}`; // Exibe o dia e mês
    }),
    datasets: [
      {
        label: 'Preço (USD)',
        data: priceData.prices.map((price) => price[1]), // Extrai o preço
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 2,
        pointRadius: 1,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            return `$${context.raw.toFixed(2)}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Dias',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Preço (USD)',
        },
        ticks: {
          callback: function (value: number | string) {
            if (typeof value === 'number') {
              return `$${value}`;
            }
            return value;
          },
        },
      },
    },
  };  

  return (
    <div>
      <h2>Gráfico de Preço (últimos 7 dias)</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default CryptoDetail;
