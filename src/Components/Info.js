import React from "react";
import InformationCard from "./InformationCard";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="servicios">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>¿Por qué elegir Super Asia?</span>
        </h3>
        <p className="info-description">
          En <strong>Super Asia</strong> nos apasiona ofrecerte una experiencia de compra
          única, rápida y llena de sabor. Traemos lo mejor de la cultura asiática
          directamente a tu hogar, con productos auténticos, precios justos y un servicio
          que marca la diferencia.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          emoji="🚀"
          title="Entrega rápida y segura"
          description="Tu pedido llega a la puerta de tu casa en tiempo récord. Con seguimiento en línea y embalaje seguro para cuidar cada producto."
        />

        <InformationCard
          emoji="🛒"
          title="Variedad increíble de productos"
          description="Encuentra desde snacks japoneses y fideos coreanos hasta utensilios chinos y dulces tailandeses. ¡Todo en un solo lugar!"
        />

        <InformationCard
          emoji="💳"
          title="Compra fácil y 100% online"
          description="Navega, selecciona y paga en minutos con medios de pago seguros. ¡Tu experiencia de compra será rápida y sin complicaciones!"
        />

        <InformationCard
          emoji="💬"
          title="Atención personalizada"
          description="Nuestro equipo está siempre disponible para ayudarte con dudas, recomendaciones o soporte postventa. ¡Queremos que vuelvas feliz!"
        />
      </div>
    </div>
  );
}

export default Info;
