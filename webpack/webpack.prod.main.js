const { merge } = require('webpack-merge');
const common = require('./common');
const main = require('./main');
const prod = require('./prod');

module.exports = merge(common, main, prod);
