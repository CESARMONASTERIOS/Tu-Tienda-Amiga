import React, { useState } from 'react';
import FormularioPedido from './FormularioPedido.jsx';

const productosCuarto = [
  { id: 1, nombre: 'Almohada ortopédica', descripcion: 'Descanso garantizado.', precio: '$30', imagen: 'https://images.unsplash.com/photo-1601979031925-5f3829b43a1c?auto=format&fit=crop&w=500&q=80' },
  { id: 2, nombre: 'Ropa de cama premium', descripcion: 'Suave y elegante.', precio: '$70', imagen: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b64?auto=format&fit=crop&w=500&q=80' },
];

function Cuarto() {
  const [filtro, setFiltro] = useState('');
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const filtrados = productosCuarto.filter(p =>
    p.nombre.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="container my-5 fondo-cuarto p-4 rounded-3">
      <h2 className="text-center mb-4">Decoración de cuarto</h2>

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

export default Cuarto;
