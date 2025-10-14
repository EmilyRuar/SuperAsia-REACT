import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';

beforeAll(() => {
  // Registra todos los matchers: toBeInTheDocument, toHaveTextContent, etc.
  jasmine.addMatchers(jasmineDom);
});

afterEach(() => {
  cleanup();
});


// (Opcional) Si tus componentes usan fetch:
// import 'whatwg-fetch';