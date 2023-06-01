module.exports = function (options) {
  return {
    extensions: ['.pug', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: options.paths.alias,
  };
}
