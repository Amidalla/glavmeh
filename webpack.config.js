const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const fs = require('fs');
const pages = fs.readdirSync(path.resolve(__dirname, 'src')).filter(fileName => fileName.endsWith('.html'));

module.exports = {
    entry: {
        app: "./src/assets/js/index.js"
    },
    output: {
        clean: true,
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    mode: "development",
    devServer: {
        static: "./src",
        compress: true,
        port: 9000,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.(s[ac]ss|css)$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
    plugins: [
        ...pages.map(page => new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', page),
            filename: page,
            minify: false,
        })),
    ],
};
