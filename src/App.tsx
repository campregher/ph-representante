import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Representadas from './pages/Representadas';
import Distribuidores from './pages/Distribuidores';
import LojistasOnline from './pages/LojistasOnline';
import Contato from './pages/Contato';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/representadas" element={<Representadas />} />
          <Route path="/distribuidores" element={<Distribuidores />} />
          <Route path="/lojistas-online" element={<LojistasOnline />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>

        {/* Botão global */}
        <WhatsAppButton />
      </div>
    </Router>
  );
};

export default App;
