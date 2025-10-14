import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="legal-wrapper">
      <header className="legal-header">
        <h1 className="brand-title">
          <Link to="/" className="brand-link">
            Cuid<span className="brand-highlight">App</span>
          </Link>
        </h1>
      </header>

      <main className="legal-container">
        <h2 className="page-heading">📘 Documentos Legales</h2>
        <p className="page-subtitle">
          Conoce nuestras políticas, términos y condiciones para garantizar una experiencia
          segura y transparente.
        </p>

        <section className="legal-section">
          <h3 className="legal-title">Información General</h3>
          <p className="legal-description">
            Bienvenido a <strong>CuidApp</strong>, tu plataforma confiable de cuidado domiciliario
            y consultas médicas online en Santiago de Chile. Nuestra misión es brindar servicios
            de salud accesibles, personalizados y seguros. Al usar nuestra plataforma, aceptas
            los términos establecidos en nuestra Política de Privacidad y Términos de Servicio.
          </p>
        </section>

        <section className="legal-section">
          <h3 className="legal-title">Política de Privacidad</h3>
          <p className="legal-description">
            Valoramos tu privacidad. Nuestra Política de Privacidad explica cómo recopilamos,
            usamos y protegemos tu información personal y médica. Garantizamos manejo seguro
            de datos, confidencialidad total y transparencia sobre el uso de tu información.
          </p>
        </section>

        <section className="legal-section">
          <h3 className="legal-title">Términos de Servicio</h3>
          <p className="legal-description">
            Al utilizar <strong>CuidApp</strong>, aceptas nuestros Términos de Servicio. Esto incluye
            pautas para usar la plataforma, la relación con nuestras cuidadoras y profesionales
            de la salud, y las responsabilidades de ambas partes. Es importante conocer estos
            términos para asegurar una experiencia fluida y segura.
          </p>
        </section>

        <section className="legal-section">
          <h3 className="legal-title">Consultas Médicas</h3>
          <p className="legal-description">
            Nuestra plataforma te conecta con médicos y cuidadoras expertas que ofrecen consultas
            online y visitas domiciliarias. Estas consultas no reemplazan la atención presencial
            en casos críticos, pero facilitan orientación médica, emisión de recetas y seguimiento.
            Es fundamental proporcionar información completa y precisa para recibir el mejor cuidado.
          </p>
        </section>

        <section className="legal-section">
          <h3 className="legal-title">Cómo Funciona</h3>
          <p className="legal-description">
            <strong>CuidApp</strong> simplifica el acceso a la salud en Santiago. Puedes elegir un
            especialista o cuidadora, agendar tu visita o consulta virtual, y recibir recomendaciones
            personalizadas según tus necesidades. Recuerda que en situaciones de emergencia debes
            acudir directamente a un centro de salud local.
          </p>
        </section>
      </main>

      <footer className="legal-footer">
        <p>© 2025 <span className="brand-highlight">CuidApp</span>. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default LegalDocs;
