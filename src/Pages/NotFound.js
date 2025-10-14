import React from "react";
import { useLocation } from "react-router-dom";

function NotFound() {
  const deployedURL = window.location.href;
  const location = useLocation();

  return (
    <div>
      <h1>Página no encontrada</h1>
      <p>Lo sentimos, la dirección {deployedURL} no existe en nuestro sitio.</p>
      <p>Ruta solicitada: {location.pathname}  Es posible que el enlace esté roto o la página haya sido movida.</p>
    </div>
  );
}

export default NotFound;
