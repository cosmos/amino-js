const merge  = require('webpack-merge');
const common = require('./webpack.common');
const web    = require('./webpack.web');
const node   = require('./webpack.node');

const env = (process.env.NODE_ENV === 'production')
    ? require('./webpack.production')
    : require('./webpack.development');

module.exports = [
    merge(common, web, env),
    merge(common, node, env)
];
