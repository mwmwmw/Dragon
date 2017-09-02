var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './src/Main.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'main.bundle.js',
		library: 'Dragon',
		libraryTarget: 'var'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			}
		]
	},
	stats: {
		colors: true
	},
	devtool: 'source-map'
};
