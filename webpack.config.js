const apolloHasSideEffects = !['true', '1'].includes(process.env.TREE_SHAKE_REACT_APOLLO);

module.exports = {
  mode: 'production',
  resolve: {
    mainFields: ['jsnext:main', 'module', 'main'],
    extensions: ['.mjs', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
			{
				test: /react-apollo/,
				sideEffects: apolloHasSideEffects,
			}            
    ],
  },
};
