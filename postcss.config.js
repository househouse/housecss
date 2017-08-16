require('cssnano');

module.exports = {
  plugins: [
    require('precss'),
    require('postcss-cssnext'),
    require('postcss-import'),
    require('postcss-remove-root'),
    require('postcss-discard-comments'),
    require('postcss-reporter'),
  ]
}
