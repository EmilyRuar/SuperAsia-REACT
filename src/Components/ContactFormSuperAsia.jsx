import React, { useState, useEffect } from "react";
import "../Styles/ContactFormHero.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactFormSuperAsia() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!name.trim()) errors.name = "El nombre es requerido";
    else if (name.trim().length < 3) errors.name = "Debe tener al menos 3 caracteres";

    if (!email.trim()) errors.email = "El correo es requerido";
    else if (!/\S+@\S+\.\S+/.test(email)) errors.email = "Ingrese un correo válido";

    if (!phone.trim()) errors.phone = "El número de contacto es requerido";
    else if (phone.trim().length < 8) errors.phone = "Debe tener al menos 8 dígitos";

    if (!message.trim()) errors.message = "Escribe tu mensaje o consulta";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setFormErrors({});

    toast.success("✅ ¡Gracias! Hemos recibido tu mensaje.", {
      position: toast.POSITION.TOP_CENTER,
      onOpen: () => setIsSubmitted(true),
      onClose: () => setIsSubmitted(false),
    });
  };

  return (
    <section className="contact-hero-section" id="contacto">
      <div className="contact-overlay">
        <div className="contact-content">
          <h2>📬 Contáctanos en Super Asia 🏮</h2>
          <p className="hero-subtitle">
            Completa este formulario y nuestro equipo se pondrá en contacto contigo rápidamente.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
             
             

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nombre completo"
              />
              {formErrors.name && <p className="error-message">{formErrors.name}</p>}
            </div>

            <div className="form-group">
             
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Correo electrónico"
              />
              {formErrors.email && <p className="error-message">{formErrors.email}</p>}
            </div>

            <div className="form-group">
            
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Número de contacto"
              />
              {formErrors.phone && <p className="error-message">{formErrors.phone}</p>}
            </div>

            <div className="form-group">
             
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Escribe tu mensaje o consulta..."
              />
              {formErrors.message && <p className="error-message">{formErrors.message}</p>}
            </div>

            <button type="submit" className="contact-submit-btn">
              📩 Enviar mensaje
            </button>

            {isSubmitted && (
              <p className="success-message">
                Gracias por contactarnos. Nuestro equipo te responderá pronto.
              </p>
            )}
          </form>
        </div>
      </div>

    

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </section>
  );
}

export default ContactFormSuperAsia;
