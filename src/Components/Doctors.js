import React, { useState } from "react";
import DoctorCard from "./DoctorCard";
import "../Styles/Doctors.css";
import "../Styles/DoctorModal.css";

import profile11 from "../Assets/profile-11.png";
import profile22 from "../Assets/profile-22.png";
import profile33 from "../Assets/profile-33.png";
import profile4 from "../Assets/profile-4.png";
import profile5 from "../Assets/profile-5.png";
import profile6 from "../Assets/profile-6.png";
import profile7 from "../Assets/profile-7.png";
import profile8 from "../Assets/profile-8.png";
import profile9 from "../Assets/profile-9.png";
import profile10 from "../Assets/profile-10.png";

function Doctors() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const doctors = [
    {
      img: profile11,
      name: "Enf. Carolina Rojas",
      title: "Enfermera Domiciliaria",
      stars: "4.9",
      reviews: "1250",
      description:
        "Con más de 10 años de experiencia en atención domiciliaria. Especialista en control de signos vitales, curaciones y acompañamiento postoperatorio.",
      disponibilidad: "Disponible Lunes a Viernes (09:00 - 18:00)",
    },
    {
      img: profile22,
      name: "María José Fuentes",
      title: "Cuidadora de Adulto Mayor",
      stars: "4.8",
      reviews: "980",
      description:
        "Destacada por su empatía y dedicación. Acompaña a personas mayores en sus rutinas diarias con respeto, afecto y compromiso.",
      disponibilidad: "Disponible Sábados y Domingos (08:00 - 17:00)",
    },
    {
      img: profile33,
      name: "Paula Contreras",
      title: "Técnico en Enfermería (TENS)",
      stars: "4.7",
      reviews: "860",
      description:
        "Experta en manejo de pacientes post quirúrgicos y administración de medicamentos bajo supervisión médica.",
      disponibilidad: "Disponible Lunes a Sábado (10:00 - 20:00)",
    },
    {
      img: profile5,
      name: "Camila Aravena",
      title: "Asistente de Rehabilitación",
      stars: "4.8",
      reviews: "720",
      description:
        "Apoya procesos de rehabilitación física y emocional con técnicas personalizadas de estimulación motriz.",
      disponibilidad: "Disponible Martes a Viernes (09:00 - 18:00)",
    },
    {
      img: profile10,
      name: "Isabel Fernández",
      title: "Cuidadora Especializada en Alzheimer",
      stars: "4.9",
      reviews: "640",
      description:
        "Brinda acompañamiento y cuidado integral a personas con deterioro cognitivo. Fomenta rutinas seguras y afectivas.",
      disponibilidad: "Disponible todos los días (09:00 - 19:00)",
    },
    {
      img: profile9,
      name: "Verónica Salazar",
      title: "Enfermera de Geriatría",
      stars: "4.8",
      reviews: "590",
      description:
        "Profesional en atención a adultos mayores con patologías crónicas. Fuerte enfoque en bienestar emocional y físico.",
      disponibilidad: "Disponible Lunes a Jueves (08:00 - 16:00)",
    },
    {
      img: profile8,
      name: "Lorena Paredes",
      title: "Cuidadora de Adultos Mayores Dependientes",
      stars: "4.7",
      reviews: "530",
      description:
        "Cuidadora integral con experiencia en pacientes con movilidad reducida y dependencia severa.",
      disponibilidad: "Disponible Lunes a Sábado (07:00 - 15:00)",
    },
    {
      img: profile7,
      name: "Natalia Castillo",
      title: "Asistente de Terapias Físicas",
      stars: "4.8",
      reviews: "480",
      description:
        "Apoya terapias de movimiento y ejercicios para recuperación muscular en domicilio.",
      disponibilidad: "Disponible Viernes a Domingo (09:00 - 18:00)",
    },
    {
      img: profile6,
      name: "María Elena López",
      title: "Enfermera de Apoyo Postoperatorio",
      stars: "4.9",
      reviews: "450",
      description:
        "Acompaña a pacientes en recuperación post quirúrgica asegurando cuidados profesionales en el hogar.",
      disponibilidad: "Disponible Lunes a Viernes (09:00 - 17:00)",
    },
  ];

  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Conoce a Nuestras Profesionales</span>
        </h3>
        <p className="dt-description">
          En nuestra red encontrarás cuidadoras y enfermeras con vocación,
          experiencia y compromiso. Cada una ha sido seleccionada por su
          calidad humana y profesional.
        </p>
      </div>

      <div className="dt-cards-content">
        {doctors.map((doctor, index) => (
          <div key={index} className="doctor-card-wrapper">
            <DoctorCard
              img={doctor.img}
              name={doctor.name}
              title={doctor.title}
              stars={doctor.stars}
              reviews={doctor.reviews}
            />
            <button
              className="dt-more-btn"
              onClick={() => setSelectedDoctor(doctor)}
            >
              Conoce más →
            </button>
          </div>
        ))}
      </div>

      {/* Modal con información detallada */}
      {selectedDoctor && (
        <div className="doctor-modal-overlay" onClick={() => setSelectedDoctor(null)}>
          <div
            className="doctor-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedDoctor.img}
              alt={selectedDoctor.name}
              className="doctor-modal-img"
            />
            <h3>{selectedDoctor.name}</h3>
            <p className="doctor-modal-title">{selectedDoctor.title}</p>
            <p className="doctor-modal-desc">{selectedDoctor.description}</p>
            <p className="doctor-modal-avail">
              🕒 <strong>Disponibilidad:</strong> {selectedDoctor.disponibilidad}
            </p>
            <button
              className="doctor-modal-close"
              onClick={() => setSelectedDoctor(null)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Doctors;
