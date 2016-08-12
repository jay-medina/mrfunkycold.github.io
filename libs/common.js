const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


exports.config = function(PATHS) {
  return {
    entry: {
      app: path.join(PATHS.app, 'index.tsx')
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
    ],
    module: {
      loaders: [
        { 
          test: /\.tsx?$/,
          loader: 'ts-loader'
        }
      ],
      preLoaders: [
        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        { test: /\.js$/, loader: "source-map-loader" }
      ]
    }
    
  };

}