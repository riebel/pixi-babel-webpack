import loaders, { plugins } from './webpack.loaders';
const path = require('path');

const DEV_SERVER_PORT = 3000;
const REL_PATH = '/assets/';
const BUILD_PATH = path.resolve(__dirname, `web${REL_PATH}`);
const entries = {};

entries['app'] = [ './src/AppBundle/Resources/public/js/index' ];

module.exports = {
    entry: entries,
    devServer: {
        devtool: 'source-map',
        hot: true,
        inline: true,
        port: DEV_SERVER_PORT,
        outputPath: BUILD_PATH,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        contentBase: 'web/'
    },
    output: {
        publicPath: REL_PATH,
        path: BUILD_PATH,
        filename: '[name].bundle.js',
        libraryTarget: 'umd',
        library: '[name]',
        chunkFilename: '[id].js'
    },
    devtool: 'source-map',
    module: {
        loaders
    },
    plugins: plugins,
    debug: true
};