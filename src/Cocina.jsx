import React, { useState } from 'react';
import FormularioPedido from './FormularioPedido.jsx';

const productosCocina = [
  { id: 1, nombre: 'Cuchillo mediano, marca Tramontina', descripcion: 'Ideal para cocinar.', precio: 'Bs. 20', imagen: 'public/Cocina/Cuchillo mediano.jpg', alt: 'Cuchillo mediano' },
  { id: 2, nombre: 'Cuchillo mediano con mango cafe, marca Tramontina', descripcion: 'Ideal para cocinar.', precio: 'Bs. 22', imagen: 'public/Cocina/Cuchillo mediano2.jpg', alt: 'Cuchillo mediano 2' },
  { id: 3, nombre: 'Cuchillo de 7 pulgadas, marca Tramontina', descripcion: 'Ideal para cocinar.', precio: 'Bs. 28', imagen: 'public/Cocina/Cuchillo de 7 pul.jpg', alt: 'Cuchillo de 7 pulgadas' },
  { id: 4, nombre: 'Cuchillo pequeño', descripcion: 'Ideal para cocinar.', precio: 'Bs. 14', imagen: 'public/Cocina/Cuchillo pequeno.jpg', alt: 'Cuchillo pequeno' },
  { id: 5, nombre: 'Docena de Cucharas, marca Tramontina', descripcion: 'Ideal para cocinar.', precio: 'Bs. 30', imagen: 'public/Cocina/Cuchara.jpg', alt: 'Cuchara' },
  { id: 6, nombre: 'Cucharon', descripcion: 'Ideal para cocinar.', precio: 'Bs. 20', imagen: 'public/Cocina/Cucharon.jpg', alt: 'Cucharon' },
  { id: 6, nombre: 'Cucharon, marca Tramontina', descripcion: 'Ideal para cocinar.', precio: 'Bs. 20', imagen: 'public/Cocina/Cucharon.jpg', alt: 'Cucharon' },
  { id: 6, nombre: 'Tenedor para trinchera, marca Tramontina', descripcion: 'Ideal para cocinar.', precio: 'Bs. 35', imagen: 'public/Cocina/Tenedor para trinchera.png', alt: 'Tenedor para trinchera' },
  { id: 7, nombre: 'Espatula, marca Tramontina', descripcion: 'Ideal para cocinar.', precio: 'Bs. 35', imagen: 'public/Cocina/Espatula.png', alt: 'Espatula' },
  { id: 8, nombre: 'Lonchera', descripcion: 'Corte profesional.', precio: 'Bs. 30', imagen: './Loncheras.jpg', alt: 'Lonchera' },
];

function Cocina() {
  const [filtro, setFiltro] = useState('');
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const filtrados = productosCocina.filter(p =>
    p.nombre.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="container my-5 fondo-cocina p-4 rounded-3">
      <h2 className="text-center mb-4">Utensilios de cocina</h2>

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

export default Cocina;
