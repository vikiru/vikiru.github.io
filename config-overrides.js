const path = require('path');
const { addWebpackAlias } = require('customize-cra');

module.exports = function override(config) {
    addWebpackAlias({
        '~assets': path.resolve(__dirname, 'src/assets'),
        '~data': path.resolve(__dirname, 'src/assets/data'),
        '~images': path.resolve(__dirname, 'src/assets/images'),
        '~components': path.resolve(__dirname, 'src/components'),
        '~pages': path.resolve(__dirname, 'src/pages'),
        '~utils': path.resolve(__dirname, 'src/utils'),
        '~types': path.resolve(__dirname, 'src/types'),
        '~hooks': path.resolve(__dirname, 'src/hooks'),
    })(config);

    return config;
};
