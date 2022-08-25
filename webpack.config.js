let path = require('path');


module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'keygenme.js',
        path: path.resolve(__dirname, 'build')
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js?/,
                include: /src/,
                use: [{
                    loader: 'babel-loader',
                    query: { presets: ['es2015'] }
                }]
            }
        ]
    }
};
