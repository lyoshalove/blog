import { Configuration, RuleSetRule } from 'webpack';
import path from 'path';
import type { BuildPaths } from '../build/types/config';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';

export default ({ config }: { config: Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('.ts', '.tsx');

  // eslint-disable-next-line no-param-reassign
  config.module!.rules = config.module!.rules!.map((rule) => {
    if (/svg/.test((rule as RuleSetRule).test as string)) {
      return { ...(rule as RuleSetRule), exclude: /\.svg$/i };
    }

    return rule;
  });

  config.module?.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });

  config.module?.rules?.push(buildCssLoaders(true));

  return config;
};