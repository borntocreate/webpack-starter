
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");


module.exports = {
    entry: {
        main: "./src/main.js",
    },
    output: {
        filename: "[name].dist.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
    ]
}
