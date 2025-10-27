import React, { useEffect, useState } from "react";
import Doctor from "../Assets/superasia.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/Hero.css";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">🛒 Productos asiáticos al alcance de tu hogar</p>
          <h2 className="text-title">
             Bienvenido a <span>Super Asia</span> Tu tienda online de cultura y sabor oriental
          </h2>
          <p className="text-descritpion">
          Explora una amplia selección de productos importados directamente desde Asia:
            snacks, fideos, bebidas, utensilios y mucho más. Compra fácil, rápido y seguro.
          </p>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
          >
            <FontAwesomeIcon />  🛍️ Ver productos
          </button>
          <div className="text-stats">
            <div className="text-stats-container">
              <p>1000+</p>
              <p>Clientes satisfechos</p>
            </div>

            <div className="text-stats-container">
              <p>300+</p>
              <p>Productos importados</p>
            </div>

            <div className="text-stats-container">
              <p>10+</p>
              <p>Años conectando culturas</p>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={Doctor} alt="Doctor" /> 
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
