import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // 🔽 Función para hacer scroll suave a secciones del home
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="navbar-section">
      {/* Logo */}
      <h1 className="navbar-title">
        <Link to="/" onClick={() => scrollToSection("home")}>
          Super Asia
        </Link>
      </h1>

      {/* Ícono hamburguesa (solo en móviles) */}
      <div className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? "✖" : "☰"}
      </div>

      {/* Menú */}
      <ul className={`navbar-items ${isOpen ? "open" : ""}`}>
        <li className="nav-item">
          <Link
            onClick={() => {
              closeMenu();
              scrollToSection("home");
            }}
            className="nav-link"
            to="/"
          >
            Inicio
          </Link>
        </li>

        <li className="nav-item">
          <span
            onClick={() => {
              closeMenu();
              navigate("/Productos");
            }}
            className="nav-link link-button"
          >
            Productos
          </span>
        </li>

        <li className="nav-item">
          <span
            onClick={() => {
              closeMenu();
              navigate("/Ofertas");
            }}
            className="nav-link link-button"
          >
            Ofertas
          </span>
        </li>

        <li className="nav-item">
          <span
            onClick={() => {
              closeMenu();
              scrollToSection("nosotros");
            }}
            className="nav-link link-button"
          >
            Nosotros
          </span>
        </li>

        <li className="nav-item">
          <span
            onClick={() => {
              closeMenu();
              scrollToSection("contacto");
            }}
            className="nav-link link-button"
          >
            Contacto
          </span>
        </li>

    
        {/* Carrito */}
        <li className="nav-item">
          <Link onClick={closeMenu} to="/carrito" className="nav-link emoji-cart">
            🛒
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
