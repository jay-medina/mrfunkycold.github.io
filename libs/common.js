const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


exports.config = function(PATHS) {
  return {
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

}