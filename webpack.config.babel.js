import loaders from './webpack.loaders';
var path = require('path');

const namedArgs = process.argv.reduce((o, v) => {
    const arg = v.split('=');
    o[arg[0]] = arg[1] || true;
    return o;
}, {});

const useServerPath = '--useServerPath' in namedArgs;
const DEV_SERVER_PORT = 3000;
const REL_PATH = '/assets/';
const PUBLIC_PATH = useServerPath ? `http://localhost:${DEV_SERVER_PORT}${REL_PATH}` : REL_PATH;
const BUILD_PATH = path.resolve(__dirname, `web${REL_PATH}`);

module.exports = {
    entry: [
        './src/app'
    ],
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
        publicPath: PUBLIC_PATH,
        path: BUILD_PATH,
        filename: '[name].bundle.js',
        chunkFilename: '[id].js'
    },
    devtool: 'source-map',
    module: {
        loaders
    },
    debug: true
};