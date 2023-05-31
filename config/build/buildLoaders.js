const PugPlugin = require('pug-plugin');

module.exports = function () {
  const pugLoader = {
    test: /\.pug$/,
    loader: PugPlugin.loader,
  };

  const styleLoader = {
    test: /\.(css|sass|scss)$/,
    use: ['css-loader', 'sass-loader'],
  };

  return [
    pugLoader,
    styleLoader
  ]
}