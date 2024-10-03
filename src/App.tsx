import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CryptoList from './components/CryptoList';
import Favorites from './components/best';
import CryptoDetail from './components/CryptoDetails';  // Importa o componente de detalhes
import { FavoritesProvider } from './context/FavoritesContext';
import './index.css';

const App: React.FC = () => {
  return (
    <FavoritesProvider>
      <Router>
        <Routes>
          <Route path="/" element={<CryptoList />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/crypto/:id" element={<CryptoDetail />} /> {/* Adiciona a rota para detalhes */}
        </Routes>
      </Router>
    </FavoritesProvider>
  );
};

export default App;
