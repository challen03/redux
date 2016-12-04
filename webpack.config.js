var webpack = require('webpack');
var commonPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
module.exports = {
	entry: {index: './src/js/index.js'},
	output: {
		path: './static/',
		publicPath: 'http://localhost:8080/static/',
		filename: '[name].js'
	},
	module: {
		loaders: [
			{test: /\.js$/, loader: 'babel-loader', query: {presets: ['es2015', 'react']}, exclude: /node_modules/},
			{test: /\.(jpg|png|gif)$/, loader: 'url-loader?limit=8129&name=./[name].[ext]'},
			{test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},	
		]
	},
    plugins: [commonPlugin]
}