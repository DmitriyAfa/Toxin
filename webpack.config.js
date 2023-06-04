const path = require('path');

const buildDevServer = require('./config/build/buildDevServer');
const buildLoaders = require('./config/build/buildLoaders');
const buildPlugins = require('./config/build/buildPlugins');
const buildResolvers = require('./config/build/buildResolvers');

const paths = {
  entry: {
    index: './src/pages/ui-kit/colors-and-types/ui/colors-and-types.pug'
  },
  src: path.join(__dirname, 'src'),
  alias: {
    '@/app': path.join(__dirname, 'src/app/'),
    '@/pages': path.join(__dirname, 'src/pages/'),
    '@/widgets': path.join(__dirname, 'src/widgets/'),
    '@/features': path.join(__dirname, 'src/features/'),
    '@/entities': path.join(__dirname, 'src/entities/'),
    '@/shared': path.join(__dirname, 'src/shared/'),
  }
};

module.exports = {
  output: {
    path: path.join(__dirname, 'dist/'),
    publicPath: '/',
  },

  resolve: buildResolvers({
    paths,
  }),

  entry: {
    index: './src/pages/ui-kit-colors/ui-kit-colors.pug'
  },

  plugins: buildPlugins(),

  module: {
    rules: buildLoaders(),
  },

  devServer: buildDevServer({
    port: 8080
  }),

};