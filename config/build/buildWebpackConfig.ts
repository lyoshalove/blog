import webpack from 'webpack';
import { buildDevServer } from './buildDevServer';
import { buildPlugins } from './buildPlugins';
import { buildResolve } from './buildResolve';
import { buildLoaders } from './buildLoaders';
import { BuildOptions } from './types/config';

export const buildWebpackConfig = (
  options: BuildOptions,
): webpack.Configuration => {
  const { mode, paths, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
      publicPath: '/',
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolve(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
};
