const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
}

//merges properties together
const merge = require('webpack-merge');

// checks to ensure that config is correct
const validate = require('webpack-validator'); 

const parts = require('./libs/parts');

const commonConfig = {
  entry: {
    app: PATHS.app
  },
  devtool: 'source-map',
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack demo'
    })
  ]
};

var config;

switch(process.env.npm_lifecycle_event) {
  case 'build':
    config = merge(
      commonConfig, 
      parts.setupCSS(PATHS.app)); break;

  default:
    config = merge(
      commonConfig, 
      parts.devServer({
        host: process.env.HOST,
        port: process.env.PORT
      }),
      parts.setupCSS(PATHS.app)
    );
}

module.exports = validate(config);