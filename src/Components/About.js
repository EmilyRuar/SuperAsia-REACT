import React from "react";
import VideoFile from "../Assets/video_superasia.mp4";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <section className="about-section" id="nosotros">
         <div className="about-image-content">
        <video
          className="about-video1"
          src={VideoFile}
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>Sobre Super Asia ... </span>
        </h3>

        <p className="about-description">
          En <strong>Super Asia</strong> fusionamos tradición y modernidad para traerte
          los mejores productos del continente asiático 🌏. Desde snacks coreanos hasta
          salsas japonesas, queremos que disfrutes la cultura y el sabor auténtico de Asia
          sin salir de casa.
        </p>

        <h4 className="about-text-title">🛍️ ¿Cómo funciona?</h4>

        <SolutionStep
          emoji="🧭"
          title="Explora nuestro catálogo"
          description="Encuentra cientos de productos asiáticos seleccionados especialmente para ti. Filtra por país, tipo o marca, ¡y descubre nuevos sabores cada semana!"
        />

        <SolutionStep
          emoji="🛒"
          title="Agrega tus favoritos al carrito"
          description="Haz clic, elige la cantidad y confirma tu pedido con total seguridad. Nuestro sitio es rápido, confiable y 100% online."
        />

        <SolutionStep
          emoji="📦"
          title="Recibe tu pedido en casa"
          description="Empacamos tus productos con cuidado y los enviamos directamente a tu puerta. ¡Disfruta el sabor de Asia sin moverte de tu hogar!"
        />

        <SolutionStep
          emoji="💬"
          title="Vive la experiencia Super Asia"
          description="Únete a nuestra comunidad, recibe promociones exclusivas y sé parte de la revolución asiática en tu mesa."
        />
      </div>
    </section>
  );
}

export default About;
