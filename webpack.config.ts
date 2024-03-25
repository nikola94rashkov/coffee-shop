import path from 'path'

import CopyWebpackPlugin from 'copy-webpack-plugin'
import { type Configuration } from 'webpack'

const config: Configuration = {
	mode:
		(process.env.NODE_ENV as 'production' | 'development' | undefined) ??
		'development',
	entry: './src/index.tsx',
	module: {
		rules: [
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
	plugins: [
		new CopyWebpackPlugin({
			patterns: [{ from: 'public' }],
		}),
	],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
}

export default config
