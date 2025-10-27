import React, { useState, useEffect } from "react";
import { customerReviews } from "../Scripts/reviews";
import "../Styles/Reviews.css";

function ReviewsSuperAsia() {
  const [reviewIndex, setReviewIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const reviewsLength = customerReviews.length;

  const changeReview = (direction) => {
    setFade(false);
    setTimeout(() => {
      setReviewIndex((prev) => {
        if (direction === "next") return prev >= reviewsLength - 1 ? 0 : prev + 1;
        if (direction === "back") return prev <= 0 ? reviewsLength - 1 : prev - 1;
        return prev;
      });
      setFade(true);
    }, 200);
  };

  const currentReview = customerReviews[reviewIndex];
  const { name, location, message, product, emoji } = currentReview;

  return (
    <section className="review-section" id="reviews">
      <h3 className="rw-title">
        Lo que dicen nuestros clientes de <span>Super Asia 🏮</span>
      </h3>

      <div className={`rw-card ${fade ? "fade-in" : "fade-out"}`}>
        <div className="rw-emoji">{emoji || "🛍️"}</div>
        <p className="rw-message">"{message}"</p>
        {product && <p className="rw-product">Producto: <strong>{product}</strong></p>}

        <div className="rw-footer">
          <div className="rw-user">
            <p className="rw-name">{name}</p>
            <p className="rw-location">{location}</p>
          </div>
          <div className="rw-buttons">
            <button onClick={() => changeReview("back")} className="rw-btn">←</button>
            <button onClick={() => changeReview("next")} className="rw-btn">→</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewsSuperAsia;
