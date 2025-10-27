import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Info.css";

function InformationCard({ emoji, title, description, categoryLink }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (categoryLink) {
      navigate(categoryLink);
    }
  };

  return (
    <div className="info-card">
      <div className="info-emoji">{emoji}</div>
      <h4 className="info-card-title">{title}</h4>
      <p className="info-card-description">{description}</p>
      {categoryLink && (
        <button className="info-card-btn" onClick={handleClick}>
          Ver más productos
        </button>
      )}
    </div>
  );
}

export default InformationCard;
