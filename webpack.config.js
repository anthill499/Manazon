const path = require("path");
module.exports = {
  entry: "./frontend/manazon.jsx",
  output: {
    filename: "./bundle.js",
    path: path.resolve(__dirname, "app", "assets", "javascripts"),
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env", "@babel/react"],
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|ttf)$/,
        use: {
          loader: "url-loader",
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
      },
    ],
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", "*"],
  },
};
