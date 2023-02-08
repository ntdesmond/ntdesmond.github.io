const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./common');
const cv = require('./cv');
const main = require('./main');

module.exports = merge(common, cv, main, {
  mode: 'development',
  devServer: {
    static: path.join(__dirname, 'src'),
    historyApiFallback: true,
  },
});
