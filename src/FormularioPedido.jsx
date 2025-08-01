import React, { useRef } from 'react';

function FormularioPedido({ producto }) {
  const formRef = useRef();

  const enviarWhatsApp = (e) => {
    e.preventDefault(); // Evita el envío normal

    const form = formRef.current;
    const nombre = form.nombre.value;
    const email = form.email.value;
    const productoNombre = form.producto.value;
    const mensajeAdicional = form.mensaje.value;

    const mensaje = `Hola, quiero hacer un pedido:\n\n👤 Nombre: ${nombre}\n📧 Correo: ${email}\n📦 Producto: ${productoNombre}\n📝 Mensaje: ${mensajeAdicional}`;

    const numero = '59162566592';
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, '_blank');
  };

  return (
    <div className="formulario-pedido shadow p-4 rounded bg-light" id="formulario">
      <h3>Haz tu pedido</h3>

      <form
        ref={formRef}
        action="https://formsubmit.co/tutiendafavoritasi@gmail.com"
        method="POST"
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://tutiendafavorita.netlify.app/gracias" />

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
            defaultValue={producto ? producto.nombre : ''}
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

        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-success">
            Enviar por correo
          </button>
          <button type="button" className="btn btn-outline-success" onClick={enviarWhatsApp}>
            Enviar por WhatsApp
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormularioPedido;
