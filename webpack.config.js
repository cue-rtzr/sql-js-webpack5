const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Output Management",
    }),
    new CopyPlugin({
      patterns: [
        { from: "node_modules/sql.js/dist/sql-wasm.wasm", to: "static/js/" },
      ],
    }),
  ],
  devServer: {
    hot: true,
  },
  resolve: {
    extensions: [".dev.js", ".js", ".json", ".wasm"],
    fallback: {
      crypto: false,
      path: false,
      fs: false,
    },
  },
};
