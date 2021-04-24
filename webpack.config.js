const path = require("path");
const pkg = require("./package.json");
module.exports = {
  entry: "./src/react-persian-input.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    library: pkg.name,
    libraryTarget: "umd",
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: {
          loader: "url-loader",
          options: {
            limit: 8192,
          },
        },
      },
    ],
  },
};
