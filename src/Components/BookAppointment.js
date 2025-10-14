import React from "react";
import InformationCard from "./InformationCard";
import "../Styles/Info.css";

function CategoriesInfo() {
  const categories = [
    {
      emoji: "🍜",
      title: "Fideos & Ramen",
      description: "Deliciosos fideos y ramen auténticos de Japón, Corea y otros países asiáticos.",
      link: "/productos/fideos-ramen"
    },
    {
      emoji: "🍱",
      title: "Snacks & Bento",
      description: "Snacks, cajas Bento y comidas listas para disfrutar en cualquier momento.",
      link: "/productos/snacks-bento"
    },
    {
      emoji: "🥢",
      title: "Salsas & Condimentos",
      description: "Salsas japonesas, coreanas y chinas que transforman cualquier plato en auténtico.",
      link: "/productos/salsas-condimentos"
    },
    {
      emoji: "🍵",
      title: "Bebidas & Té",
      description: "Tés tradicionales, bebidas refrescantes y especialidades asiáticas.",
      link: "/productos/bebidas-te"
    }
  ];

  return (
    <div className="info-section" id="categorias">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>Categorías de Super Asia 🏮</span>
        </h3>
        <p className="info-description">
          Explora nuestras categorías y encuentra los productos más auténticos del continente asiático. Desde snacks japoneses hasta bebidas tradicionales, todo al alcance de un clic.
        </p>
      </div>

      <div className="info-cards-content">
        {categories.map((cat, idx) => (
          <InformationCard
            key={idx}
            emoji={cat.emoji}
            title={cat.title}
            description={cat.description}
            categoryLink={cat.link} // 🔹 botón "Ver más productos"
          />
        ))}
      </div>
    </div>
  );
}

export default CategoriesInfo;
