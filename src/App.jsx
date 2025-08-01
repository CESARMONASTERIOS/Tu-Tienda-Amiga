import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Tenis from './Tenis';
import Cocina from './Cocina';
import Cuarto from './Cuarto';
import Sala from './Sala';
import Bano from './Bano';
import Ropa from './Ropa';
import Navbar from './Navbar';
import Gracias from './Gracias.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tenis" element={<Tenis />} />
        <Route path="/cocina" element={<Cocina />} />
        <Route path="/cuarto" element={<Cuarto />} />
        <Route path="/sala" element={<Sala />} />
        <Route path="/bano" element={<Bano />} />
        <Route path="/ropa" element={<Ropa />} />
        <Route path="/gracias" element={<Gracias />} />
      </Routes>
    </>
  );
}

export default App;