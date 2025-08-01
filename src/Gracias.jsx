// Gracias.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Gracias() {
  return (
    <div className="container text-center py-5">
      <h1 className="text-success display-4 mb-3">¡Gracias por tu preferencia!</h1>
      <p className="lead">Tu pedido fue recibido correctamente. En breve nos comunicaremos contigo.</p>
      <p className="mt-4">
        Si tienes alguna duda o consulta urgente,<br />
        escríbenos al <strong><a href="https://wa.me/59162566592" target="_blank" rel="noopener noreferrer">+591 62566592</a></strong>
      </p>
      <Link to="/" className="btn btn-outline-primary mt-4">Volver al inicio</Link>
    </div>
  );
}

export default Gracias;
