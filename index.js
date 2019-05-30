module.exports = (typeof process !== 'undefined' && process.versions && process.versions.node)
    ? require('./dist/node')
    : require('./dist/web');
