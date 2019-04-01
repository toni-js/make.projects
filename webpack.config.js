const 
  path = require( 'path' ),
  HtmlWebPackPlugin = require( 'html-webpack-plugin' ),
  isDev = process.env.NODE_ENV

module.exports = {
  entry: path.resolve( __dirname, './src/index.tsx' ),
  output: {
    path: path.resolve( __dirname, 'dist' ),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.(styl|stylus)$/,
        exclude: /node_modules/,
        loader: [ 'style-loader', 'css-loader', 'stylus-loader' ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin()
  ],
  resolve: {
    extensions: [ '.js', '.jsx', '.json', '.tsx', '.ts' ]
  },
  stats: {
    errorDetails: true
  },
  devServer: {
    historyApiFallback: true,
  }
}