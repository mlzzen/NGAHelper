const path = require('path');
const merge = require('webpack-merge');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
// 对js代码进行混淆压缩的插件
const uglifyJSPlugin = new UglifyJSPlugin();

// 对babel的配置，内容同.babelrc文件
const babelOptions = {
    "presets": [
        [
            "env", {
                "targets": {
                    "browsers": ["last 2 versions", "safari >= 7"]
                }
            }
        ]
    ]
}
module.exports = {
    entry: [
        'babel-polyfill', './src/main.ts'
    ],
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: babelOptions
                    }, {
                        loader: 'ts-loader'
                    }
                ]
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [uglifyJSPlugin],
    // 设置出口文件地址与文件名
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.min.js'
    }
};