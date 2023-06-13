const PugPlugin = require('pug-plugin');

module.exports = function () {
  const plugins = [
    new PugPlugin({
      pretty: true,
      js: {
        filename: 'assets/js/[name].[contenthash:8].js',
      },
      css: {
        filename: 'assets/css/[name].[contenthash:8].css',
      },
    }),
  ]

  return plugins;
}