import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './estilos.css';
import './estilosNavbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/Tu-Tienda-Amiga">
  <App />
</BrowserRouter>

);
