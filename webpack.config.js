const path = require('path');
const common = require('./libs/common');
const merge = require('webpack-merge');
const validate = require('webpack-validator'); 
const parts = require('./libs/parts');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

const commonConfig = common.config(PATHS);


var config;

switch(process.env.npm_lifecycle_event) {
  case 'build':
    config = merge(
      commonConfig,
      parts.setFreeVariable(
        'process.env.NODE_ENV',
        'production'
      ),
      parts.extractBundle({
        name: 'vendor',
        entries: ['react']
      }),
      parts.minify(),
      parts.setupCSS(PATHS.app)); 
    
    break;

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