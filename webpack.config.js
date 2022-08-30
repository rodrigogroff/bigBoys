const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  target: 'web',
  devtool: 'source-map',
  context: path.resolve(__dirname, './'),
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'src/static/js')
    }
  },
  entry: {
    '/src/static/Dashboard': './src/static/js/pages/Dashboard/router.js',    
    '/src/static/Catalog': './src/static/js/pages/Catalog/router.js',    
    '/src/static/CatalogPoster': './src/static/js/pages/CatalogPoster/router.js',    
    '/src/static/Item': './src/static/js/pages/Item/router.js',    
    '/src/static/FAQ': './src/static/js/pages/FAQ/router.js',    
    '/src/static/Login': './src/static/js/pages/Login/router.js',    
    '/src/static/Register': './src/static/js/pages/Register/router.js',    
    '/src/static/Production': './src/static/js/pages/Production/router.js',    
  },
  output: {
    globalObject: "this",
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
  ]
}
