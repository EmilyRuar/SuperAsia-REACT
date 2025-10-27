import React from "react";
import "../Styles/Ofertas.css";
import OfertaImg from "../Assets/nosotros.png"; 

function Ofertas() {
  return (
    <div className="ofertas-section">
      <h2 className="ofertas-title">Ofertas</h2>
      <div className="ofertas-content">
        <img src={OfertaImg} alt="Sin ofertas" className="ofertas-img" />
        <p className="ofertas-text">¡Por ahora no hay productos en ofertas!</p>
      </div>
    </div>
  );
}

export default Ofertas;
