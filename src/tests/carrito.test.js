import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Productos from "../Components/Productos";
import { productos } from "../Scripts/dataProductos"; // ajusta la ruta

describe("Productos Component - Cálculo de carrito", () => {
  
  it("calcula correctamente el total del carrito", () => {
    const { container, getByText } = render(<Productos />);

    // Agregar primer producto (id 1) 2 veces
    const primerBoton = container.querySelector(".btn-agregar");
    fireEvent.click(primerBoton);
    fireEvent.click(primerBoton);

    // Agregar segundo producto (id 2) 1 vez
    const segundoBoton = container.querySelectorAll(".btn-agregar")[1];
    fireEvent.click(segundoBoton);

    // Verificar total
    const totalElemento = container.querySelector(".carrito-total span");
    
    const totalEsperado = (productos[0].precio * 2) + productos[1].precio;
    expect(Number(totalElemento.textContent.replace(/\D/g, ""))).toBe(totalEsperado);
  });

});
