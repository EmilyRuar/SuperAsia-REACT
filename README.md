🌟 Sobre el Proyecto
SuperAsia es una aplicación web moderna de e-commerce desarrollada con React, especializada en la venta de productos asiáticos. El proyecto implementa las mejores prácticas de desarrollo frontend, incluyendo componentes reutilizables, gestión de estado con Context API, diseño responsive y una suite completa de pruebas unitarias.
¿Por qué SuperAsia?

✅ Arquitectura escalable con componentes modulares React
✅ Diseño responsive optimizado para todos los dispositivos
✅ Testing completo con 85%+ de cobertura de código
✅ Experiencia de usuario fluida con navegación SPA
✅ Código limpio siguiendo las mejores prácticas de React


✨ Características
Funcionalidades Principales
🛒 Carrito de Compras Interactivo

Agregar/eliminar productos
Modificar cantidades en tiempo real
Cálculo automático de subtotales, IVA y total
Persistencia de datos durante la sesión

🔍 Búsqueda y Filtrado

Búsqueda en tiempo real por nombre de producto
Filtrado por categorías
Ordenamiento por precio
Resultados instantáneos

📱 Diseño Responsive

Optimizado para móviles, tablets y desktop
Breakpoints adaptables con Bootstrap 5
Menú hamburguesa en dispositivos móviles
Grid flexible para diferentes pantallas

💳 Proceso de Checkout

Formulario de compra intuitivo
Validación en tiempo real
Mensajes de error claros
Resumen del pedido antes de confirmar

🎨 Interfaz Moderna

Diseño limpio y minimalista
Animaciones suaves
Feedback visual en interacciones
Paleta de colores profesional


🛠️ Tecnologías
Frontend Framework

React 18.2.0 - Biblioteca principal para UI
React Router 6.x - Navegación SPA
React Hooks - useState, useEffect, useContext, custom hooks

Estilos

Bootstrap 5.3.0 - Framework CSS responsive
CSS Modules - Estilos encapsulados por componente
CSS3 - Animaciones y transiciones personalizadas

Testing

Jasmine 5.1.0 - Framework de testing
Karma 6.4.2 - Test runner
@testing-library/react 14.0.0 - Utilidades para testing de React
@testing-library/jest-dom - Matchers personalizados

Herramientas de Desarrollo

Create React App - Configuración inicial del proyecto
npm/yarn - Gestor de paquetes
ESLint - Linter para código JavaScript
Prettier - Formateador de código
Git - Control de versiones


🚀 Instalación
Prerrequisitos
Asegúrate de tener instalado:

Node.js (v16.0.0 o superior)
npm (v8.0.0 o superior) o yarn (v1.22.0 o superior)
Git

Pasos de Instalación

Clonar el repositorio

bashgit clone https://github.com/EmilyRuar/SuperAsia-REACT.git
cd SuperAsia-REACT

Instalar dependencias

bashnpm install
# o si usas yarn
yarn install

Configurar variables de entorno (opcional)

bashcp .env.example .env
Edita el archivo .env con tus configuraciones:
envREACT_APP_API_URL=http://localhost:3001
REACT_APP_NAME=SuperAsia

Iniciar el servidor de desarrollo

bashnpm start
# o
yarn start
La aplicación estará disponible en http://localhost:3000

💻 Uso
Desarrollo
bash# Iniciar servidor de desarrollo
npm start

# Compilar para producción
npm run build

# Ejecutar tests
npm test

# Ejecutar tests con cobertura
npm run test:coverage

# Ejecutar linter
npm run lint

# Formatear código
npm run format
Scripts Disponibles
ScriptDescripciónnpm startInicia el servidor de desarrollonpm run buildCompila la aplicación para producciónnpm testEjecuta las pruebas unitariasnpm run test:watchEjecuta tests en modo watchnpm run test:coverageGenera reporte de coberturanpm run ejectExpone la configuración de CRA (irreversible)npm run lintEjecuta ESLintnpm run formatFormatea código con Prettier

🧪 Testing
El proyecto cuenta con una suite completa de pruebas unitarias que garantizan la calidad y funcionalidad del código.
Métricas de Cobertura
Statements   : 85.4% ( 324/379 )
Branches     : 81.2% ( 143/176 )
Functions    : 88.7% ( 102/115 )
Lines        : 86.1% ( 310/360 )
Ejecutar Tests
bash# Ejecutar todos los tests
npm test

# Ejecutar tests con cobertura
npm run test:coverage

# Ejecutar tests en modo watch
npm run test:watch

# Ejecutar tests de un componente específico
npm test -- Navbar.test.js
Componentes Testeados

✅ Navbar - 95.2% cobertura
✅ ProductCard - 92.8% cobertura
✅ Cart - 90.5% cobertura
✅ CartItem - 93.7% cobertura
✅ CheckoutForm - 88.3% cobertura
✅ SearchBar - 87.1% cobertura
✅ FilterBar - 85.6% cobertura
✅ ProductList - 89.2% cobertura

Ver Documento de Cobertura Completo


