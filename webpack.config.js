const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './src/application/assets/app.js',
  },
  output: {
    path: path.join(__dirname, 'app/assets'),
    filename: '[name].js',
  },
  watch: false,
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass'),
      },
      {
        test: /\.svg$/,
        loader: 'babel?presets[]=es2015,presets[]=react!svg-react',
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('app.css', {
      allChunks: true,
    }),
    new webpack.IgnorePlugin(new RegExp('^(fs|ipc)$')),
  ],
};
