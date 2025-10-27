import React from "react";
import { render } from "@testing-library/react";
import Navbar from "../Components/Navbar";

describe("Navbar Component", () => {
  it("debería renderizar el logo SuperAsia", () => {
    const { getByText } = render(<Navbar />);
    expect(getByText(/SuperAsia/i)).toBeTruthy();
  });
});
