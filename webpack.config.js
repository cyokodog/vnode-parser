module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: ['ts-loader']
    }, ]
  },
  entry: {
    'index': './src/index.ts',
    'sample': './src/sample/index.tsx'
  },
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js',
    library: 'vnodeParser',
    libraryTarget: 'umd',
    globalObject: 'typeof self !== \'undefined\' ? self : this'
  }
};