import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_fbtgjvs", // Tu Service ID
        "template_v95ubbk", // Tu Template ID
        {
          nombre: formData.nombre, // Claves deben coincidir con las variables del template
          email: formData.email,
          mensaje: formData.mensaje,
        },
        "YXnj4I2j1hqNYv4jn" // Tu Public Key
      )
      .then(
        (result) => {
          alert("Mensaje enviado con éxito!");
          setFormData({ nombre: "", email: "", mensaje: "" });
        },
        (error) => {
          alert("Error al enviar el mensaje. Intenta de nuevo.");
          console.error(error);
        }
      );
  };

  return (
    <section className="contacto" id="contacto">
      <div className="center-contacto">
        <div className="h-main">
          <div className="h-text">
            <h2>Contacto</h2>
          </div>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="mensaje"
              cols="30"
              rows="10"
              placeholder="Escribe un mensaje..."
              value={formData.mensaje}
              onChange={handleChange}
              required
            ></textarea>
            <input type="submit" value="Enviar mensaje" className="send-btn" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
