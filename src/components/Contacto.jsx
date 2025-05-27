import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

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
          setModalMessage("Mensaje enviado con éxito!");
          setShowModal(true);
          setFormData({ nombre: "", email: "", mensaje: "" });
        },
        (error) => {
          setModalMessage("Error al enviar el mensaje. Intenta de nuevo.");
          setShowModal(true);
          console.error(error);
        }
      );
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section className="contacto" id="contacto">
      <div className="center-contacto">
        <div className="h-main">
          <div className="h-text">
            <h2>Contacto</h2>
            <div className="h-btn">
              {/* <a href="#" className="hh-btn">
                Contactame <i className="ri-arrow-right-line"></i>
              </a> */}
            </div>
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

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <p>{modalMessage}</p>
            <button onClick={handleCloseModal} className="modal-close-btn">
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contacto;
