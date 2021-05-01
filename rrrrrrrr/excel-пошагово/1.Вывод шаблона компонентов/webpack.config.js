const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = (env, argv) => {
    const isProd = argv.mode === 'production'
    const isDev = !isProd

    const optimization = () => {
        const config = {
            splitChunks: {
                chunks: 'all',
            },
        }

        if (isProd) {
            config.minimizer = [
                new OptimizeCssAssetsPlugin(),
                new TerserPlugin(),
            ]
        }
        return config
    }

    const filename = (ext) =>
        isProd ? `[name].[hash].bundle.${ext}` : `[name].bundle.${ext}`

    const plugins = () => {
        const base = [
            new HtmlWebpackPlugin({
                template: './index.html',
            }),
            new CopyPlugin({
                patterns: [{
                    from: path.resolve(__dirname, 'src', 'faviconka.ico'),
                    to: path.resolve(__dirname, 'dist'),
                }, ],
            }),
            new MiniCssExtractPlugin({
                filename: filename('css'),
            }),
        ]

        if (isDev) {
            base.push(new ESLintPlugin())
        }

        if (isProd) {
            base.push(new BundleAnalyzerPlugin())
        }

        return base
    }

    return {
        target: 'web',
        context: path.resolve(__dirname, 'src'),
        entry: {
            main: './index.js',
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: filename('js'),
            clean: true,
        },
        resolve: {
            extensions: ['.js'],
            alias: {
                '@': path.resolve(__dirname, 'src'),
                '@core': path.resolve(__dirname, 'src', 'core'),
            },
        },
        optimization: optimization(),
        devServer: {
            port: 3000,
            open: true,
            hot: true,
        },
        devtool: isDev ? 'source-map' : false,
        plugins: plugins(),
        module: {
            rules: [{
                    test: /\.s[ac]ss$/i,
                    use: [{
                            loader: MiniCssExtractPlugin.loader,
                            options: {},
                        },
                        'css-loader',
                        'sass-loader',
                    ],
                },
                {
                    test: /\.m?js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                        },
                    },
                },
                {
                    test: /\.ts$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-typescript',
                            ],
                        },
                    },
                },
                {
                    test: /\.jsx$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react',
                            ],
                            plugins: ['@babel/plugin-syntax-jsx'],
                        },
                    },
                },
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    loader: 'file-loader',
                    options: {
                        name: 'images/[name].[ext]',
                    },
                },
                {
                    test: /\.(ttf|woff|woff2|eot|svg)$/,
                    use: ['file-loader'],
                },
                {
                    test: /\.xml$/,
                    use: ['xml-loader'],
                },
            ],
        },
    }
}