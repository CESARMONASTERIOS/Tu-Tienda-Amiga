import React, { useState } from 'react';
import FormularioPedido from './FormularioPedido.jsx';
import { Carousel } from 'react-bootstrap';

const productosRecomendados = [
  { id: 1, nombre: 'Tenis Running Pro', precio: 'Bs. 80', imagen: 'https://images.unsplash.com/photo-1590080877777-1b36ee83e0be?auto=format&fit=crop&w=400&q=80' },
  { id: 2, nombre: 'Set cuchillos', precio: 'Bs. 55', imagen: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80' },
  { id: 3, nombre: 'Alfombra decorativa', precio: 'Bs. 60', imagen: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b64?auto=format&fit=crop&w=400&q=80' },
];

function Home() {
  const [mostrarModal, setMostrarModal] = useState(false);

  return (
    <>
      <div className="fondo-home text-black text-center py-5">
        <h1 className="display-3">Bienvenido a Hogar & Tenis</h1>
        <p className="lead">Calidad, estilo y comodidad para cada rincón de tu hogar.</p>
        <button className="btn btn-outline-black btn-lg" onClick={() => setMostrarModal(true)}>Ver promociones 🎁</button>
      </div>

      <Carousel className="mb-5">
        <Carousel.Item><img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1500&q=80" alt="promo1" className="d-block w-100" /></Carousel.Item>
        <Carousel.Item><img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1500&q=80" alt="promo2" className="d-block w-100" /></Carousel.Item>
        <Carousel.Item><img src="https://images.unsplash.com/photo-1549187774-b4e9b0445b64?auto=format&fit=crop&w=1500&q=80" alt="promo3" className="d-block w-100" /></Carousel.Item>
      </Carousel>

      <section className="productos-recomendados container mb-5">
        <h2 className="mb-4">Productos recomendados</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {productosRecomendados.map(p => (
            <div key={p.id} className="col">
              <div className="card tarjeta">
                <img src={p.imagen} alt={p.nombre} className="card-img-top" />
                <div className="card-body">
                  <h5>{p.id}. {p.nombre}</h5>
                  <p className="fw-bold text-primary">{p.precio}</p>
                  <span className="badge bg-success">En oferta</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* <section className="testimonios bg-light py-5">
        <div className="container">
          <h2 className="mb-4 text-center">Lo que dicen nuestros clientes</h2>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {[
              { n: 'María', texto: 'Excelentes productos y atención.' },
              { n: 'Carlos', texto: 'Envío rápido y calidad garantizada.' },
              { n: 'Ana', texto: 'Muy responsables, volveré a comprar.' },
            ].map((t, i) => (
              <div key={i} className="col">
                <div className="card p-3 shadow-sm">
                  <p>"{t.texto}"</p>
                  <p className="fw-bold mb-0">— {t.n}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="my-5 container" id="formulario">
        <FormularioPedido />
      </section>
    </>
  );
}

export default Home;
