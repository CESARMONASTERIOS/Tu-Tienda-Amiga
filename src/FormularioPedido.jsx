import React from 'react';

function FormularioPedido({ producto }) {
  return (
    <div className="formulario-pedido shadow p-4 rounded bg-light" id="formulario">
      <h3>Haz tu pedido</h3>
      <form
        action="https://formsubmit.co/tutiendafavoritasi@gmail.com"
        method="POST"
      >
        <input type="hidden" name="_captcha" value="false" />
        <div className="mb-3">
          <label className="form-label">Nombre completo *</label>
          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="Tu nombre"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Correo electrónico *</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="tu@email.com"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Producto *</label>
          <input
            type="text"
            name="producto"
            className="form-control"
            placeholder="Nombre del producto que deseas"
            value={producto ? producto.nombre : ''}
            readOnly={!!producto}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Mensaje adicional</label>
          <textarea
            name="mensaje"
            className="form-control"
            rows="3"
            placeholder="Alguna indicación especial"
          ></textarea>
        </div>

        <input type="hidden" name="_next" value="https://tusitio.com/gracias" />

        <button type="submit" className="btn btn-success w-100">
          Enviar pedido
        </button>
      </form>
    </div>
  );
}

export default FormularioPedido;
