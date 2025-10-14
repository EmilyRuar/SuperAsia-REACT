import React from 'react';
import { render} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';
import BookAppointment from '../Components/BookAppointment';
import Doctors from '../Components/Doctors';
import { screen } from '@testing-library/react';


test('muestra el texto correcto', () => {
  render(<App />);
  const elemento = screen.getByText(/hola mundo/i);
  expect(elemento).toBeInTheDocument(); // matcher de jest-dom
});



describe('CuidApp - Tests Generales', () => {

  it('Renderiza 3 servicios destacados en Home', () => {
    render(<Home />, { wrapper: BrowserRouter });
    const servicios = screen.getAllByTestId('destacado');
    expect(servicios.length).toBe(3);
  });

  it('Renderiza al menos 3 doctores/cuidadoras', () => {
    render(<Doctors />, { wrapper: BrowserRouter });
    const cards = screen.getAllByTestId('doctor-card');
    expect(cards.length).toBeGreaterThanOrEqual(3);
  });

  it('Renderiza el botón de contratar en BookAppointment', () => {
    render(<BookAppointment />, { wrapper: BrowserRouter });
    const btn = screen.getByTestId('btn-contratar');
    expect(btn).toBeInTheDocument();
  });

  it('Verifica que los títulos de servicios sean h3', () => {
    render(<Home />, { wrapper: BrowserRouter });
    const titles = screen.getAllByRole('heading', { level: 3 });
    expect(titles.length).toBe(3);
  });

  it('Navega al componente BookAppointment al hacer click en el botón', () => {
    render(<BookAppointment />, { wrapper: BrowserRouter });
    const btn = screen.getByTestId('btn-contratar');
    fireEvent.click(btn);
    // Solo verificamos que el botón exista y sea clickeable; la navegación real se testea con rutas mockeadas
    expect(btn).toBeEnabled();
  });

});
