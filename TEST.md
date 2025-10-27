# 🛠️ Configuración de Pruebas - SuperAsia React

Este proyecto implementa pruebas completas utilizando Karma, Jasmine y Webpack para asegurar la calidad del código en **SuperAsia React**.  

**Stack de Testing:**  
- ⚡ Karma: Test runner que ejecuta tests en navegadores reales  
- 🧪 Jasmine: Framework BDD (Behavior-Driven Development)  
- 📦 Webpack: Bundler para transpilar y empaquetar tests  
- 🖥️ @testing-library/react: Utilidades para testing de componentes React  
- ✨ Babel: Transpilador para JSX y ES6+  
- 🕵️‍♂️ Istanbul / babel-plugin-istanbul: Instrumentación de código para cobertura  
- 📊 karma-coverage: Plugin de Karma para reportes de cobertura  

**Dependencias instaladas:** "@babel/core": "^7.28.5", "@babel/preset-env": "^7.28.5", "@babel/preset-react": "^7.28.5", "@testing-library/react": "^16.3.0", "babel-loader": "^10.0.0", "css-loader": "^7.1.2", "jasmine-core": "^5.12.0", "karma": "^6.4.4", "karma-chrome-launcher": "^3.2.0", "karma-jasmine": "^5.1.0", "karma-jasmine-html-reporter": "^2.1.0", "karma-spec-reporter": "^0.0.36", "karma-webpack": "^5.0.1", "style-loader": "^4.0.0", "webpack": "^5.102.1", "webpack-cli": "^6.0.1"  

**Archivos de configuración:** karma.conf.cjs (frameworks: Jasmine y Webpack, navegadores: Chrome / ChromeHeadlessCI, reporteros: spec y jasmine-html-reporter, Webpack configurado para transpilar JSX), .babelrc (presets: "@babel/preset-env" y ["@babel/preset-react", { "runtime": "automatic" }])  

**Cobertura de código:**  
- Instrumentación: babel-plugin-istanbul  
- Reportes: karma-coverage  
- Umbral mínimo: 85% en statements, branches, functions y lines  
- Reportes generados: HTML coverage/html/index.html, LCOV coverage/lcov.info, JSON coverage/coverage.json, Text Summary en consola  
- Interpretación de colores: 🟢 Verde ≥ 85%, 🟡 Amarillo 50-85%, 🔴 Rojo < 50%  

**Tests implementados:**  
- **Cobertura actual:** Navbar.test.js (Statements 100%, Branches 50%, Functions 100%, Lines 100%), Productos.test.js (Statements 100%, Branches 50%, Functions 100%, Lines 100%), Carrito.test.js (Statements 100%, Branches 50%, Functions 100%, Lines 100%)  
- **Componentes testeados:** Navbar (renderizado y navegación con useNavigate), Productos (renderizado de tarjetas, filtros, agregar/eliminar productos), Carrito (manejo de items, totales y actualizaciones de cantidad)  
- **Tests pasando:** 100% statements y lines, 50% branches (área de mejora)  


