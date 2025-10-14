import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/AppointmentForm.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AppointmentForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [patientName, setPatientName] = useState("");
  const [patientNumber, setPatientNumber] = useState("");
  const [patientGender, setPatientGender] = useState("default");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [preferredMode, setPreferredMode] = useState("default");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!patientName.trim()) errors.patientName = "Nombre del paciente es requerido";
    else if (patientName.trim().length < 5)
      errors.patientName = "El nombre debe tener al menos 5 caracteres";

    if (!patientNumber.trim()) errors.patientNumber = "Número de contacto es requerido";
    else if (patientNumber.trim().length < 8)
      errors.patientNumber = "Número debe tener al menos 8 dígitos";

    if (patientGender === "default")
      errors.patientGender = "Seleccione el género del paciente";

    if (!appointmentTime) errors.appointmentTime = "Seleccione fecha y hora de la visita";
    else {
      const selectedTime = new Date(appointmentTime).getTime();
      const currentTime = new Date().getTime();
      if (selectedTime <= currentTime)
        errors.appointmentTime = "Seleccione una fecha futura";
    }

    if (preferredMode === "default")
      errors.preferredMode = "Seleccione el tipo de servicio";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // limpiar formulario
    setPatientName("");
    setPatientNumber("");
    setPatientGender("default");
    setAppointmentTime("");
    setPreferredMode("default");
    setFormErrors({});

    toast.success("✅ ¡Visita agendada con éxito!", {
      position: toast.POSITION.TOP_CENTER,
      onOpen: () => setIsSubmitted(true),
      onClose: () => setIsSubmitted(false),
    });
  };

  return (
    <div className="appointment-form-wrapper">
      <header className="form-header">
        <h1>
          <Link to="/" className="brand-link">
            Cuid<span className="brand-highlight">App</span>
          </Link>
        </h1>
      </header>

      <div className="form-card">
        <h2>🩺 Agendar visita a domicilio</h2>
        <p className="form-subtitle">
          Completa los siguientes datos para coordinar tu atención.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>👤 Nombre completo del paciente</label>
            <input
              type="text"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              placeholder="Ej: María González"
            />
            {formErrors.patientName && (
              <p className="error-message">{formErrors.patientName}</p>
            )}
          </div>

          <div className="form-group">
            <label>📞 Número de contacto</label>
            <input
              type="text"
              value={patientNumber}
              onChange={(e) => setPatientNumber(e.target.value)}
              placeholder="Ej: 987654321"
            />
            {formErrors.patientNumber && (
              <p className="error-message">{formErrors.patientNumber}</p>
            )}
          </div>

          <div className="form-group">
            <label>⚧ Género del paciente</label>
            <select
              value={patientGender}
              onChange={(e) => setPatientGender(e.target.value)}
            >
              <option value="default">Seleccione</option>
              <option value="male">Masculino</option>
              <option value="female">Femenino</option>
              <option value="private">
                Prefiero informar solo a la cuidadora
              </option>
            </select>
            {formErrors.patientGender && (
              <p className="error-message">{formErrors.patientGender}</p>
            )}
          </div>

          <div className="form-group">
            <label>🕓 Fecha y hora de la visita</label>
            <input
              type="datetime-local"
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
            />
            {formErrors.appointmentTime && (
              <p className="error-message">{formErrors.appointmentTime}</p>
            )}
          </div>

          <div className="form-group">
            <label>💬 Tipo de servicio</label>
            <select
              value={preferredMode}
              onChange={(e) => setPreferredMode(e.target.value)}
            >
              <option value="default">Seleccione</option>
              <option value="voice">Visita a domicilio</option>
              <option value="video">Consulta remota (video/voz)</option>
            </select>
            {formErrors.preferredMode && (
              <p className="error-message">{formErrors.preferredMode}</p>
            )}
          </div>

          <button type="submit" className="submit-btn">
            💖 Confirmar visita
          </button>

          {isSubmitted && (
            <p className="success-message">
              Los detalles han sido enviados al número del paciente.
            </p>
          )}
        </form>
      </div>

      <footer className="form-footer">
        © 2025 <span className="brand-highlight">CuidApp</span> — Todos los
        derechos reservados.
      </footer>

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}

export default AppointmentForm;
