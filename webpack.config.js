const path = require('path');
const buildDevServer = require('./config/build/buildDevServer');
const buildLoaders = require('./config/build/buildLoaders');
const buildPlugins = require('./config/build/buildPlugins');

module.exports = {
  output: {
    path: path.join(__dirname, 'dist/'),
    publicPath: '/',
  },

  entry: {
    // define Pug files here
    index: './src/index.pug', // => dist/index.html
    // 'pages/about': './src/about/index.pug',
  },

  plugins: buildPlugins(),

  module: {
    rules: buildLoaders(),
  },

  devServer: buildDevServer({
    port: 8080
  }),
};