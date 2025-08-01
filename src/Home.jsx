import React from 'react';
import FormularioPedido from './FormularioPedido.jsx';
import { Carousel } from 'react-bootstrap';

const productosRecomendados = [
  { id: 1, nombre: 'Tenis Running Pro', precio: 'Bs. 80', imagen: './Loncheras.jpg' },
  { id: 2, nombre: 'Set de cuchillos', precio: 'Bs. 55', imagen: './CalzadosG.jpg' },
  { id: 3, nombre: 'Alfombra decorativa', precio: 'Bs. 60', imagen: './Cuchillo de 7 pul.jpg' },
];

function Home() {
  return (
    <>
      {/* SECCIÓN PRINCIPAL */}
      <div className="hero-home text-white text-center d-flex flex-column justify-content-center align-items-center p-5">
        <h1 className="display-3 fw-bold animate__animated animate__fadeInDown">¡Bienvenido a Hogar & Tenis!</h1>
        <p className="lead animate__animated animate__fadeInUp">Calidad, estilo y confort para cada espacio</p>
        <a href="#formulario" className="btn btn-warning btn-lg mt-3 shadow animate__animated animate__fadeInUp">Haz tu pedido ahora ✨</a>
      </div>

      {/* CARRUSEL MÁS PEQUEÑO */}
      <div className="container my-5">
        <Carousel indicators={false} controls={true} interval={3000}>
          {productosRecomendados.map(p => (
            <Carousel.Item key={p.id}>
              <img
                src={p.imagen}
                alt={p.nombre}
                className="d-block mx-auto rounded shadow"
                style={{ maxHeight: '260px', width: 'auto' }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* PRODUCTOS DESTACADOS */}
      <section className="productos-recomendados container mb-5">
        <h2 className="mb-4 text-center text-primary">⭐ Productos recomendados</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {productosRecomendados.map(p => (
            <div key={p.id} className="col">
              <div className="card tarjeta h-100 text-center border-0 shadow-lg">
                <img src={p.imagen} alt={p.nombre} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title">{p.id}. {p.nombre}</h5>
                  <p className="text-success fw-bold">{p.precio}</p>
                  <span className="badge bg-success">En oferta</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FORMULARIO DE PEDIDO */}
      <section className="py-5 bg-light" id="formulario">
        <div className="container">
          <h2 className="text-center mb-4 text-dark">📬 Realiza tu pedido fácilmente</h2>
          <FormularioPedido />
        </div>
      </section>
    </>
  );
}

export default Home;
