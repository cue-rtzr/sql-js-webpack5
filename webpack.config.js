const HtmlWebpackPlugin = require("html-webpack-plugin");
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
  experiments: {
    asyncWebAssembly: true,
    syncWebAssembly: true,
  },
};
