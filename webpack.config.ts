const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	// Where files should be sent once they are bundled
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'index.bundle.js',
	},
	// Development server configuration
	devServer: {
		port: 3000,
	},
	// Rules for compiling and bundling files
	module: {
		rules: [
			{
				test: /\.(js|jsx|ts|tsx)$/,
				exclude: /nodeModules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg)$/,
				loader: 'url-loader',
				options: { limit: false },
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		alias: {
			// Add an alias for your components folder
			'@components': path.resolve(__dirname, 'src/components'),
			'@interfaces': path.resolve(__dirname, 'src/interfaces'),
			'@pages': path.resolve(__dirname, 'src/pages'),
		},
	},
	// Plugins
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
}
