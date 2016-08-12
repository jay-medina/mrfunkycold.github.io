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
      {
        output: {
          path: PATHS.build,
          filename: '[name].js'
        }
      },
      parts.clean(PATHS.build),
      parts.setFreeVariable(
        'process.env.NODE_ENV',
        'production'
      ),
      parts.loadingFontsAndImages(),
      parts.extractBundle({
        name: 'vendor',
        entries: ['react', 'react-dom']
      }),
      parts.minify(),
      parts.extractCSS(PATHS)
    ); 
    
    break;

  default:
    config = merge(
      commonConfig,
      parts.makeGlobalVariable({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      }), 
      parts.loadingFontsAndImages(),
      parts.devServer({
        host: process.env.HOST,
        port: process.env.PORT
      }),
      parts.setupCSS()
    );
}

module.exports = validate(config);