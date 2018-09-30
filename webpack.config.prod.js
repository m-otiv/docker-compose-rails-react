const path = require('path');

module.exports = {
    output: {
        path: path.resolve(__dirname, 'public/assets/js'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, "app/assets/javascripts")
                ],
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ["es2017", "stage-3", "react"]
                }
            }
        ]
    }
};