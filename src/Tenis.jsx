import React, { useState } from 'react';
import FormularioPedido from './FormularioPedido.jsx';

const productosTenis = [
  { id: 1, nombre: 'Tenis Running Pro', precio: 'Bs. 15', rating: 5, imagen: './Tenis & Calzados/CalzadoG.png' },
  { id: 2, nombre: 'Tenis Casual', precio: 'Bs. 60', rating: 4, imagen: './CalzadoG.png' },
  { id: 3, nombre: 'Tenis Fitness', precio: 'Bs. 65', rating: 4, imagen: './CalzadoG.png' },
];

function Estrellas({ n }) {
  return (
    <p aria-label={`${n} estrellas de 5`} role="img" style={{ color: '#ffbf00', fontSize: '1.2rem', margin: 0 }}>
      {'★'.repeat(n)}{'☆'.repeat(5 - n)}
    </p>
  );
}

function Tenis() {
  const [filtro, setFiltro] = useState('');
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const productosFiltrados = productosTenis.filter(p =>
    p.nombre.toLowerCase().includes(filtro.toLowerCase())
  );

  const handleSeleccionar = (producto) => {
    setProductoSeleccionado(producto);
    setTimeout(() => {
      document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="container my-5 fondo-tenis p-4 rounded-3 contenedor-pagina">
      <h2 className="text-center mb-4 text-white">Catálogo de Tenis & Calzado</h2>

      <input
        type="text"
        className="form-control mb-4"
        placeholder="Buscar tenis..."
        value={filtro}
        onChange={e => setFiltro(e.target.value)}
      />

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {productosFiltrados.map(prod => (
          <div key={prod.id} className="col">
            <div className="card tarjeta h-100 shadow-sm">
              <img src={prod.imagen} alt={prod.nombre} className="card-img-top" />
              <div className="card-body text-center">
                <h5 className="card-title">{prod.id}. {prod.nombre}</h5>
                <p className="fw-bold text-primary">{prod.precio}</p>
                <Estrellas n={prod.rating} />
                <button
                  onClick={() => handleSeleccionar(prod)}
                  className="btn btn-pedir mt-3"
                >
                  Pedir
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div id="formulario" className="my-5">
        <FormularioPedido producto={productoSeleccionado} />
      </div>
    </div>
  );
}

export default Tenis;
