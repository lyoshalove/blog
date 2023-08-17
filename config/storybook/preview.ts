import { Preview } from '@storybook/react';
import {
  RouterDecorator,
  StyleDecorator,
  ThemeDecorator,
} from '../../src/shared/config/storybook/decorators';
import { Theme } from '../../src/app/providers/ThemeProvider';
import '../../src/app/styles/index.scss';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => StyleDecorator(Story),
    (Story) => ThemeDecorator(Theme.LIGHT)(Story),
    (Story) => RouterDecorator(Story),
  ],
};

export default preview;
