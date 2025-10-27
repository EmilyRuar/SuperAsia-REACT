const path = require('path');

module.exports = function (config) {
  config.set({
    frameworks: ['jasmine', 'webpack'],
    files: [
      'src/**/*.test.js'
    ],
    preprocessors: {
      'src/**/*.test.js': ['webpack', 'sourcemap' ,'coverage' ]
    },
    webpack: {
      mode: 'development',
      module: {
        rules: [
          // JS / JSX
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
              }
            }
          },
          // CSS (mockeado)
          {
            test: /\.css$/,
            use: 'null-loader'
          },
          // Imágenes (mockeadas)
          {
            test: /\.(png|jpg|jpeg|gif|svg)$/,
            use: ['null-loader']
          }
        ]
      },
      resolve: {
        extensions: ['.js', '.jsx']
      },
      devtool: 'inline-source-map'
    },
    reporters: ['progress', 'kjhtml', 'coverage'],
    coverageReporter: {
      type: 'html',
      dir: 'coverage/',
      subdir: '.'
    },
    browsers: ['ChromeHeadless'],
    singleRun: true
  });
};
