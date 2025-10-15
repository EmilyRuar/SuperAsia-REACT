import React, { useState } from "react";
import "../Styles/Productos.css";
import { productos } from "../Scripts/dataProductos";

function Productos() {
  const [carrito, setCarrito] = useState([]);
  const [isCarritoOpen, setIsCarritoOpen] = useState(false);

  const agregarAlCarrito = (prod) => {
    setCarrito([...carrito, prod]);
    setIsCarritoOpen(true);
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter(item => item.id !== id));
  };

  return (
    <div className="productos-section">
      <h2 className="productos-title">Productos Destacados</h2>

      <div className="productos-grid">
        {productos.map((prod) => (
          <div key={prod.id} className="producto-card">
            {prod.descuento && <span className="badge-descuento">-{prod.descuento}%</span>}
            <img src={prod.img} alt={prod.nombre} className="producto-img" />
            <h3>{prod.nombre}</h3>
            <p className="producto-desc">{prod.descripcion}</p>
            <p className="producto-precio">
              {prod.precioOriginal && <span className="precio-original">${prod.precioOriginal}</span>}
              <span className="precio-descuento">${prod.precio}</span>
            </p>
            <button className="btn-agregar" onClick={() => agregarAlCarrito(prod)}>
              🛒 Agregar
            </button>
          </div>
        ))}
      </div>

      {/* Carrito lateral */}
      <div className={`carrito-lateral ${isCarritoOpen ? "open" : ""}`}>
        <div className="carrito-header">
          <h3>🛒 Tu Carrito</h3>
          <button className="cerrar-carrito" onClick={() => setIsCarritoOpen(false)}>✖</button>
        </div>
        {carrito.length === 0 ? (
          <p className="carrito-vacio">El carrito está vacío.</p>
        ) : (
          <ul className="carrito-items">
            {carrito.map((item, i) => (
              <li key={i} className="carrito-item">
                <span>{item.nombre}</span>
                <span>${item.precio}</span>
                <button className="btn-eliminar" onClick={() => eliminarDelCarrito(item.id)}>❌</button>
              </li>
            ))}
          </ul>
        )}
      </div>
      {isCarritoOpen && <div className="overlay" onClick={() => setIsCarritoOpen(false)}></div>}
    </div>
  );
}

export default Productos;
