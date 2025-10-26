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
            Super<span className="brand-highlight">Asia</span>
          </Link>
        </h1>
      </header>

      <main className="legal-container">
        <h2 className="page-heading">📘 Documentos Legales</h2>
        <p className="page-subtitle">
          Conoce nuestras políticas, términos y condiciones para garantizar una experiencia
          de compra segura, clara y transparente.
        </p>

        <section className="legal-section">
          <h3 className="legal-title">Información General</h3>
          <p className="legal-description">
            Bienvenido a <strong>Super Asia</strong>, tu supermercado online de confianza en Chile.
            Nos dedicamos a ofrecer productos de calidad, promociones exclusivas y un servicio
            cercano a nuestros clientes. Al usar nuestra plataforma, aceptas los términos establecidos
            en nuestras Políticas de Privacidad y Términos de Servicio.
          </p>
        </section>

        <section className="legal-section">
          <h3 className="legal-title">Política de Privacidad</h3>
          <p className="legal-description">
            En <strong>Super Asia</strong> valoramos tu privacidad y seguridad. Nuestra Política de
            Privacidad explica cómo recopilamos, usamos y protegemos tus datos personales al realizar
            compras en nuestro sitio. Garantizamos un manejo seguro de la información, confidencialidad
            y transparencia total en nuestros procesos.
          </p>
        </section>

        <section className="legal-section">
          <h3 className="legal-title">Términos de Servicio</h3>
          <p className="legal-description">
            Al utilizar <strong>Super Asia</strong>, aceptas nuestros Términos de Servicio, los cuales
            definen las condiciones de uso del sitio, los métodos de pago, las políticas de despacho,
            devoluciones y atención al cliente. Es importante revisarlos antes de realizar una compra
            para garantizar una experiencia segura y satisfactoria.
          </p>
        </section>

        <section className="legal-section">
          <h3 className="legal-title">Compras y Despachos</h3>
          <p className="legal-description">
            Nuestro objetivo es ofrecerte un proceso de compra ágil y confiable. Los productos mostrados
            en el sitio están sujetos a disponibilidad. Los despachos se realizan de acuerdo con los plazos
            y condiciones indicadas en cada pedido. Ante cualquier inconveniente, puedes comunicarte con
            nuestro servicio de atención al cliente para gestionar cambios o devoluciones.
          </p>
        </section>

        <section className="legal-section">
          <h3 className="legal-title">Funcionamiento del Sitio</h3>
          <p className="legal-description">
            <strong>Super Asia</strong> busca brindarte una experiencia de compra práctica y accesible.
            Puedes navegar por nuestras categorías, agregar productos al carrito, aplicar cupones y realizar
            pagos seguros. En caso de mantenimiento o actualización del sitio, algunos servicios podrían
            verse temporalmente interrumpidos.
          </p>
        </section>
      </main>

      <footer className="legal-footer">
        <p>© 2025 <span className="brand-highlight">Super Asia</span>. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default LegalDocs;
