module.exports = (process.env.NODE_ENV === 'production')
    ? require('./webpack.production')
    : require('./webpack.development');
