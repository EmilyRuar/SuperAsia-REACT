import React from "react";
import "../Styles/About.css";

function SolutionStep({ emoji, title, description }) {
  return (
    <div className="solution-step">
      <div className="solution-emoji">{emoji}</div>
      <div>
        <h5 className="solution-title">{title}</h5>
        <p className="solution-description">{description}</p>
      </div>
    </div>
  );
}

export default SolutionStep;
