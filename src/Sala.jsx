import React, { useState } from 'react';
import FormularioPedido from './FormularioPedido.jsx';

const productosSala = [
  { id: 1, nombre: 'Lámpara moderna', descripcion: 'Ilumina tu espacio.', precio: '$45', imagen: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=80' },
  { id: 2, nombre: 'Alfombra decorativa', descripcion: 'Estilo y confort.', precio: '$60', imagen: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=500&q=80' },
];

function Sala() {
  const [filtro, setFiltro] = useState('');
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const filtrados = productosSala.filter(p =>
    p.nombre.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="container my-5 fondo-sala p-4 rounded-3">
      <h2 className="text-center mb-4">Accesorios para sala</h2>

      <input
        className="form-control mb-3"
        placeholder="Buscar producto..."
        value={filtro}
        onChange={e => setFiltro(e.target.value)}
      />

      {filtrados.length === 0 ? (
        <p>No se encontraron productos que coincidan con tu búsqueda.</p>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
          {filtrados.map(prod => (
            <div key={prod.id} className="col">
              <div className="card tarjeta h-100 shadow-sm">
                <img src={prod.imagen} alt={prod.nombre} className="card-img-top" />
                <div className="card-body text-center">
                  <h5 className="card-title">{prod.id}. {prod.nombre}</h5>
                  <p className="card-text">{prod.descripcion}</p>
                  <p className="fw-bold text-primary">{prod.precio}</p>
                  <button
                    className="btn btn-pedir"
                    onClick={() => setProductoSeleccionado(prod)}
                    aria-label={`Pedir ${prod.nombre}`}
                  >
                    Pedir
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div id="formulario" className="my-5">
        <FormularioPedido producto={productoSeleccionado} />
      </div>
    </div>
  );
}

export default Sala;
