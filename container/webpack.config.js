const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  module: "development",
  devServer: {
    port: 8080
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './'
    })
  ]
}