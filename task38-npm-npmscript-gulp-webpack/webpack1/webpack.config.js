/**
 * Created by Administrator on 2017/4/3.
 */
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var path = require('path');

module.exports = {
    entry: './src/js/app/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/js')
    },
    plugins:[
        new UglifyJSPlugin({
            comments: false
        })
    ]
};