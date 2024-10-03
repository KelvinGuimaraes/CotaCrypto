import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CryptoList from './components/CryptoList';
import Favorites from './components/best';
import CryptoDetail from './components/CryptoDetails';
import { FavoritesProvider } from './context/FavoritesContext';
import './index.css';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <FavoritesProvider>
      <Router>
        <div className="container">
          <button className="dark-mode-toggle" onClick={toggleDarkMode}>
            {darkMode ? 'Modo Claro' : 'Modo Escuro'}
          </button>
          
          <Routes>
            <Route path="/" element={<CryptoList />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/crypto/:id" element={<CryptoDetail />} /> {/* Adiciona a rota para detalhes */}
          </Routes>
        </div>
      </Router>
    </FavoritesProvider>
  );
};

export default App;
