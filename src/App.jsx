import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Páginas principales
import Home from "./Pages/Home";
import Productos from "./Components/Productos";
import Ofertas from "./Components/Ofertas";
import Login from "./Components/Login";
import Registro from "./Components/Registro";
import Carrito from "./Components/Carrito";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";

// Componentes globales
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Router basename="/superasia-react">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
