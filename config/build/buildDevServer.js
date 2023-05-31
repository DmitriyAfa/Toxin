const path = require('path');

module.exports = function (options) {
  return {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    open: true,
    watchFiles: {
      paths: ['src/**/*.*'],
      options: {
        usePolling: true,
      },
    },
    port: options.port,
  }
}