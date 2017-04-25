const cleanPlugin = require('clean-webpack-plugin');
const copyPlugin = require('copy-webpack-plugin');
const extractPlugin = require('extract-text-webpack-plugin');

const root = `${__dirname}/src/client`;
const dist = `${__dirname}/dist`;
const paths = {
  app: `${root}/app/app.module.js`,
  styles: `${root}/styles`,
  static: {
    index: `${root}/index.html`,
    images: `${root}/images/**/*`
  }
};

// plugins
const prep = {
  clean: new cleanPlugin([
    dist
  ]),
  copy: new copyPlugin([{
    from: paths.static.index
  }, {
    from: paths.static.images,
    to: 'images/',
    flatten: true
  }])
};

const extract = {
  styles: new extractPlugin('css/styles.css'),
};

// loaders
const scripts = {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'babel'
}

const styles = {
  test: /\.scss$/,
  loader: extractPlugin.extract('style', 'css?sourceMap!sass?sourceMap'),  
}

const markup = {
  test: /\.html$/,
  loader: 'html'
}

// config
const config = {
  entry: {
    bundle: paths.app
  },
  devtool: 'source-map',
  module: {
    loaders: [
      scripts,
      styles,
      markup
    ]
  },
  plugins: [
    prep.clean,
    prep.copy,
    extract.styles
  ],
  sassLoader: {
    includePaths: [paths.styles]
  },
  output: {
    path: `${dist}/`,
    publicPath: '/',
    filename: 'js/app.[name].js'
  },
  devServer: {
    port: 8080,
    historyApiFallback: true
  }
};

module.exports = config;
