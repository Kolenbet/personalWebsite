var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");
module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: path.build

  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "ReactTemplate",
      minify: {
        collapseWhitespace: true
      },
      template: './src/index.html',
      hash: true
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    stats: "errors-only",
    port: 9000,
    open: false
  },
  devtool: "source-map",
  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".css"]
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { test: /\.(jpe?g|gif|png|svg|woff|ttf|eot|wav|mp3)$/, use: "file-loader" }
    ],
  },
};