import loaders from './webpack.loaders';
const path = require('path');

const DEV_SERVER_PORT = 3000;
const REL_PATH = '/assets/';
const BUILD_PATH = path.resolve(__dirname, `web${REL_PATH}`);

module.exports = {
    entry: [
        './src/app'
    ],
    devServer: {
        port: DEV_SERVER_PORT,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        contentBase: 'web/'
    },
    output: {
        publicPath: REL_PATH,
        path: BUILD_PATH,
        filename: '[name].bundle.js',
        chunkFilename: '[id].js'
    },
    devtool: 'source-map',
    module: {
        loaders
    }
};