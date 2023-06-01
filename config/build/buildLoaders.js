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

  const imgLoader = {
    test: /\.(png|jpg|jpeg|ico)/,
    type: 'asset/resource',
    generator: {
      // output filename of images
      filename: 'assets/img/[name].[hash:8][ext]',
    },
  }

  const fontsLoader = {
    test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
    type: 'asset/resource',
    generator: {
      // output filename of fonts
      filename: 'assets/fonts/[name][ext][query]',
    }
  }

  return [
    pugLoader,
    styleLoader,
    imgLoader,
    fontsLoader
  ]
}