/* eslint no-undef: 0, no-unused-vars: 0 */
var webpack = require('webpack');
var path = require('path');
var StyleLintPlugin = require('stylelint-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
	entry: APP_DIR + '/index.js',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				loader: 'html-loader',
				options: {
				}
			},
			{
				enforce: 'pre',
				test: /\.html/,
				loader: 'htmlhint-loader',
				exclude: /node_modules/,
				options: {
					configFile: './.htmlhintrc'
				}
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			},
			{
				enforce: 'pre',
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'eslint-loader',
				options: {
					emitWarning: true,
				}
			},
			{
				enforce: 'pre',
				test: /\.modernizrrc$/,
				loader: 'modernizr-loader'
			},
			{
				enforce: 'pre',
				test: /\.modernizrrc(\.json)?$/,
				loader: 'modernizr-loader!json-loader'
			}
		],
	},
	plugins: [
		new StyleLintPlugin({
			configFile: './.stylelintrc',
			files: ['**/*.css']
		}),
	],
	resolve: {
		alias: {
			modernizr$: path.resolve(__dirname, 'lib/.modernizrrc.json')
		}
	},
	watch: true
}
