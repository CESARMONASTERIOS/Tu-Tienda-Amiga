import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Tenis from './Tenis.jsx';
import Cocina from './Cocina.jsx';
import Cuarto from './Cuarto.jsx';
import Sala from './Sala.jsx';
import Bano from './Bano.jsx';
import Ropa from './Ropa.jsx';
import Navbar from './Navbar.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Solo un Navbar global */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tenis" element={<Tenis />} />
        <Route path="/cocina" element={<Cocina />} />
        <Route path="/cuarto" element={<Cuarto />} />
        <Route path="/sala" element={<Sala />} />
        <Route path="/bano" element={<Bano />} />
        <Route path="/ropa" element={<Ropa />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
