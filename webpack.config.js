const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = (env) => ({
  entry: {
    main: "./src/assets/js/index.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: `${__dirname}/dist`,
  },
  module: {
    rules: [
      // { test: /\.svg$/, use: 'svg-inline-loader' },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Beelinenew",
      template: path.resolve(__dirname, "src", "index.html"),
      inject: "body",
    }),
    new MiniCssExtractPlugin({
      filename: "main.[contenthash].css",
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "src/assets", to: "assets" }],
    }),
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
  },
  optimization: {
    concatenateModules: true,
    minimizer: [
      "...",
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              [
                "svgo",
                {
                  plugins: [
                    {
                      name: "preset-default",
                      params: {
                        overrides: {
                          removeViewBox: false,
                          addAttributesToSVGElement: {
                            params: {
                              attributes: [
                                { xmlns: "http://www.w3.org/2000/svg" },
                              ],
                            },
                          },
                        },
                      },
                    },
                  ],
                },
              ],
            ],
          },
        },
      }),
    ],
  },
});
