const path = require('path');

export default () => (
    {
        mode: 'production',
        entry: './index.js',
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'vtc.js',
            libraryTarget: 'umd',
            globalObject: 'this',
            library: 'vtc'
        },
        externals: {
            // 'lodash': {
            //     commonjs: 'lodash',
            //     commonjs2: 'lodash',
            //     amd: 'lodash',
            //     root: '_'
            // }
        },
        module: {
            rules: [
                {
                    test: /\.(js)$/,
                    exclude: /(node_modules|bower_components)/,
                    use: 'babel-loader'
                }
            ]
        },
    }
);
