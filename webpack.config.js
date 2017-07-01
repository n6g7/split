const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      '@actions': path.resolve(__dirname, 'src/redux/actions')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },
  plugins: [
    new Dotenv()
  ],
  devServer: {
    contentBase: './public',
    historyApiFallback: true
  }
}
