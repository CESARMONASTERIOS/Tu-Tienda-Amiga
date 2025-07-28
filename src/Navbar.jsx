import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const links = [
    { path: '/', label: 'Inicio' },
    { path: '/tenis', label: 'Tenis' },
    { path: '/bano', label: 'Baño' },
    { path: '/cocina', label: 'Cocina' },
    { path: '/cuarto', label: 'Cuarto' },
    { path: '/sala', label: 'Sala' },
    { path: '/ropa', label: 'Ropa' },
  ];

  return (
    <>
      <nav className="navbar navbar-custom py-3 px-4 mb-4 sticky-top">
        <div className="container d-flex justify-content-center gap-3 flex-wrap">
          {links.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`btn btn-nav ${location.pathname === path ? 'active' : ''}`}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>

      <a
        href="https://wa.me/59162566592?text=Hola,%20quiero%20consultar%20sobre%20un%20producto"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="WhatsApp"
        title="Chatea con nosotros en WhatsApp"
      >
        <i className="bi bi-whatsapp" style={{ fontSize: '28px', color: 'white' }}></i>
      </a>
    </>
  );
}

export default Navbar;
