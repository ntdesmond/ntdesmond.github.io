const { merge } = require('webpack-merge');
const common = require('./common');
const cv = require('./cv');
const prod = require('./prod');

module.exports = merge(common, cv, prod);
