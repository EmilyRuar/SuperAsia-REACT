import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Productos from "../Components/Productos";
import { productos } from "../Scripts/dataProductos";

// Mock de alert
beforeAll(() => {
  window.alert = jasmine.createSpy("alert");
});

describe("Productos Component", () => {
  
  it("renderiza los productos correctamente", () => {
    const { getByText } = render(<Productos productos={productos} />);
    expect(getByText("Productos Destacados")).toBeTruthy();
    productos.forEach(p =>
      expect(getByText((content) => content.includes(p.nombre))).toBeTruthy()
    );
  });

  it("agrega productos al carrito", () => {
    const { getByText, container } = render(<Productos productos={productos} />);
    const botonAgregar = container.querySelector(".btn-agregar");
    fireEvent.click(botonAgregar);

    expect(container.querySelector(".carrito-lateral.open")).toBeTruthy();
    expect(container.querySelector(".carrito-item")).toBeTruthy();
    expect(getByText((content) => content.includes(productos[0].nombre))).toBeTruthy();
  });

  it("aumenta y disminuye cantidad correctamente", () => {
    const { container } = render(<Productos productos={productos} />);
    const botonAgregar = container.querySelector(".btn-agregar");
    fireEvent.click(botonAgregar);

    const botonSumar = container.querySelector(".carrito-cantidad button:last-child");
    fireEvent.click(botonSumar);

    const cantidad = container.querySelector(".carrito-cantidad span");
    expect(cantidad.textContent).toBe("2");

    const botonRestar = container.querySelector(".carrito-cantidad button:first-child");
    fireEvent.click(botonRestar);
    expect(cantidad.textContent).toBe("1");
  });

  it("elimina productos del carrito", () => {
    const { container } = render(<Productos productos={productos} />);
    const botonAgregar = container.querySelector(".btn-agregar");
    fireEvent.click(botonAgregar);

    const botonEliminar = container.querySelector(".btn-eliminar");
    fireEvent.click(botonEliminar);

    expect(container.querySelector(".carrito-items")).toBeTruthy();
    expect(container.querySelector(".carrito-item")).toBeNull();
  });

  it("realiza checkout y confirma pago", () => {
    const { container, getByPlaceholderText, getByText } = render(<Productos productos={productos} />);
    const botonAgregar = container.querySelector(".btn-agregar");
    fireEvent.click(botonAgregar);

    const botonCheckout = getByText("Proceder al Pago");
    fireEvent.click(botonCheckout);

    fireEvent.change(getByPlaceholderText("Nombre completo"), { target: { value: "Emily" } });
    fireEvent.change(getByPlaceholderText("Email"), { target: { value: "emily@test.com" } });
    fireEvent.change(getByPlaceholderText("Dirección"), { target: { value: "Chile" } });
    fireEvent.change(getByPlaceholderText("Teléfono"), { target: { value: "123456789" } });

    const botonPagar = getByText("Pagar");
    fireEvent.click(botonPagar);

    expect(window.alert).toHaveBeenCalledWith(
      `Gracias Emily, tu pedido por $${productos[0].precio} ha sido recibido.`
    );
    expect(container.querySelector(".carrito-item")).toBeNull();
  });
});
