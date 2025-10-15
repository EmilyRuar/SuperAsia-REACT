import React, { useState } from "react";
import "../Styles/Productos.css";
import { productos } from "../Scripts/dataProductos";


function Productos() {
  const [carrito, setCarrito] = useState([]);
  const [isCarritoOpen, setIsCarritoOpen] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);
  const [datosCliente, setDatosCliente] = useState({
    nombre: "",
    email: "",
    direccion: "",
    telefono: "",
  });

  const agregarAlCarrito = (prod) => {
    const existe = carrito.find(item => item.id === prod.id);
    if (existe) {
      setCarrito(
        carrito.map(item =>
          item.id === prod.id ? { ...item, cantidad: item.cantidad + 1 } : item
        )
      );
    } else {
      setCarrito([...carrito, { ...prod, cantidad: 1 }]);
    }
    setIsCarritoOpen(true);
    setIsCheckout(false);
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter(item => item.id !== id));
  };

  const cambiarCantidad = (id, accion) => {
    setCarrito(
      carrito.map(item => {
        if (item.id === id) {
          const nuevaCantidad = accion === "sumar" ? item.cantidad + 1 : item.cantidad - 1;
          return { ...item, cantidad: nuevaCantidad > 0 ? nuevaCantidad : 1 };
        }
        return item;
      })
    );
  };

  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDatosCliente({ ...datosCliente, [name]: value });
  };

  const handleConfirmarPago = () => {
    alert(`Gracias ${datosCliente.nombre}, tu pedido por $${total.toLocaleString()} ha sido recibido.`);
    setCarrito([]);
    setIsCheckout(false);
    setIsCarritoOpen(false);
    setDatosCliente({ nombre: "", email: "", direccion: "", telefono: "" });
  };

  return (
    <div className="productos-section">
      <h2 className="productos-title">Productos Destacados</h2>

      <div className="productos-grid">
        {productos.map(prod => (
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
          <h3>🛒 Carrito de Compras</h3>
          <button className="cerrar-carrito" onClick={() => {setIsCarritoOpen(false); setIsCheckout(false)}}>✖</button>
        </div>

        {carrito.length === 0 ? (
          <p className="carrito-vacio">El carrito está vacío.</p>
        ) : isCheckout ? (
          // Formulario de checkout
          <div className="checkout-form">
            <h4>Datos del Cliente</h4>
            <input type="text" name="nombre" placeholder="Nombre completo" value={datosCliente.nombre} onChange={handleInputChange} />
            <input type="email" name="email" placeholder="Email" value={datosCliente.email} onChange={handleInputChange} />
            <input type="text" name="direccion" placeholder="Dirección" value={datosCliente.direccion} onChange={handleInputChange} />
            <input type="tel" name="telefono" placeholder="Teléfono" value={datosCliente.telefono} onChange={handleInputChange} />

            <h4>Resumen del Pedido</h4>
            <ul className="resumen-pedido">
              {carrito.map(item => (
                <li key={item.id}>
                  {item.nombre} x {item.cantidad} = ${(item.precio * item.cantidad).toLocaleString()}
                </li>
              ))}
            </ul>
            <h4>Total: ${total.toLocaleString()}</h4>

            <div className="checkout-buttons">
              <button className="btn-pagar" onClick={handleConfirmarPago}>Pagar</button>
              <button className="btn-cancelar" onClick={() => setIsCheckout(false)}>Cancelar</button>
            </div>
          </div>
        ) : (
          // Vista del carrito
          <>
            <ul className="carrito-items">
              {carrito.map((item, i) => (
                <li key={i} className="carrito-item">
                  <img src={item.img} alt={item.nombre} className="carrito-img" />
                  <div className="carrito-info">
                    <span className="carrito-nombre">{item.nombre}</span>
                    <span className="carrito-precio">{item.precio.toLocaleString()} c/u</span>
                    <div className="carrito-cantidad">
                      <button onClick={() => cambiarCantidad(item.id, "restar")}>-</button>
                      <span>{item.cantidad}</span>
                      <button onClick={() => cambiarCantidad(item.id, "sumar")}>+</button>
                    </div>
                  </div>
                  <span className="carrito-subtotal">{(item.precio * item.cantidad).toLocaleString()}</span>
                  <button className="btn-eliminar" onClick={() => eliminarDelCarrito(item.id)}>🗑️</button>
                </li>
              ))}
            </ul>
            <div className="carrito-footer">
              <h4>Total: ${total.toLocaleString()}</h4>
              <button className="btn-pagar" onClick={() => setIsCheckout(true)}>Proceder al Pago</button>
            </div>
          </>
        )}
      </div>
      {isCarritoOpen && <div className="overlay" onClick={() => {setIsCarritoOpen(false); setIsCheckout(false)}}></div>}
    </div>
  );
}

export default Productos;