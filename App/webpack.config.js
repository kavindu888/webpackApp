const path = require('path')
const { title } = require('process')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true,

    },
    devServer: {

        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3001,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true

    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },

            {
                test: /\.(svg|png|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },


        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'web app',
            filename: 'index.html',
            template: 'src/pageTemp/mapTemplate.html'
        })
    ]
}