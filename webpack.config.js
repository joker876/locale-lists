const path = require('path');

module.exports = {
    entry: './dist/index.js',
    mode: 'production',
    output: {
        filename: 'locale-lists.min.js',
        path: path.resolve(__dirname, 'dist/browser'),
        library: 'LocaleLists',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        auxiliaryComment: 'Lists of country, language, and currency locales and information.',
    },
};