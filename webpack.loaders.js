var path = require('path');

const loaders = [
    {
        loader: "babel-loader",

        // Skip any files outside of your project's `src` directory
        include: [
            path.resolve(__dirname, "src")
        ],

        // Only run `.js` and `.jsx` files through Babel
        test: /\.jsx?$/,

        // Options to configure babel with
        query: {
            presets: ['es2015']
        }
    }
];

export default loaders;