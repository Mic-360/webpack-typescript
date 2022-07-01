const path = require("path");
const Webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.ts",
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".jsx", ".json"],
  },
  stats: "errors-only",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [miniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/dist/",
    // libraryTarget: 'es6',
    // library: 'bundle'
  },
  devServer: {
    port: 8080,
    hot: "only",
    compress: true,
    client: {
      progress: true,
    },
    devMiddleware: {
      writeToDisk: true,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "WebpackTypeScript",
      template: "./public/template.html",
      filename: "../public/index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
    new miniCssExtractPlugin({ filename: "[name].css" }),
  ],
};
