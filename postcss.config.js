var postcss = require('postcss')
var cssnext = require('postcss-next')

module.exports = {
  use: [
    'postcss-next',
    'postcss-reporter',
    'postcss-import',
    'postcss-remove-root',
  ],
  input: 'src/housecss.css',
  dir: 'css',
}
