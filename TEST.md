🛠️ Configuración de Pruebas - SuperAsia React

Este documento describe la configuración completa de pruebas implementada en el proyecto SuperAsia React utilizando Karma, Jasmine y Webpack.

🛠️ Stack de Testing

Karma: Test runner que ejecuta tests en navegadores reales.

Jasmine: Framework BDD (Behavior-Driven Development).

Webpack: Bundler para transpilar y empaquetar tests.

@testing-library/react: Utilidades para testing de componentes React.

Babel: Transpilador para JSX y ES6+.

Istanbul / babel-plugin-istanbul: Instrumentación de código para cobertura.

karma-coverage: Plugin de Karma para reportes de cobertura.

📦 Dependencias Instaladas
{
  "devDependencies": {
    "@babel/core": "^7.28.5",
    "@babel/preset-env": "^7.28.5",
    "@babel/preset-react": "^7.28.5",
    "@testing-library/react": "^16.3.0",
    "babel-loader": "^10.0.0",
    "css-loader": "^7.1.2",
    "jasmine-core": "^5.12.0",
    "karma": "^6.4.4",
    "karma-chrome-launcher": "^3.2.0",
    "karma-jasmine": "^5.1.0",
    "karma-jasmine-html-reporter": "^2.1.0",
    "karma-spec-reporter": "^0.0.36",
    "karma-webpack": "^5.0.1",
    "style-loader": "^4.0.0",
    "webpack": "^5.102.1",
    "webpack-cli": "^6.0.1"
  }
}

⚙️ Archivos de Configuración

karma.conf.cjs

Frameworks: Jasmine y Webpack

Navegadores: Chrome / ChromeHeadlessCI

Reporteros: spec y jasmine-html-reporter

Webpack configurado para transpilar JSX

.babelrc

{
  "presets": [
    "@babel/preset-env",
    ["@babel/preset-react", { "runtime": "automatic" }]
  ]
}



📊 Cobertura de Código

babel-plugin-istanbul: Instrumenta el código

karma-coverage: Genera reportes

Umbral mínimo: 85% en statements, branches, functions, lines

Reporte generado:

HTML: coverage/html/index.html

LCOV: coverage/lcov.info

JSON: coverage/coverage.json

Text Summary en consola

Interpretación:

Verde ≥ 85%

Amarillo 50-85%

Rojo < 50%

✨ Tests Implementados

Cobertura actual (según imagen):

Componente	Statements	Branches	Functions	Lines
Navbar.test.js	100%	50%	100%	100%
Productos.test.js	100%	50%	100%	100%
Carrito.test.js	100%	50%	100%	100%

Componentes testeados:

Navbar: Renderizado y navegación con useNavigate

Productos: Renderizado de tarjetas, filtros, agregar/eliminar productos

Carrito: Manejo de items, totales, y actualizaciones de cantidad

Tests pasando: 100% statements y lines, 50% branches (mejorable)
