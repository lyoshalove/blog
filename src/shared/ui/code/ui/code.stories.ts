import type { Meta, StoryObj } from '@storybook/react';

import {
  StoreDecorator,
  ThemeDecorator,
} from 'shared/config/storybook/decorators';
import { Theme } from 'app/providers/ThemeProvider';
import { Code } from './code';

const meta = {
  title: 'shared/Code',
  component: Code,
  tags: ['autodocs'],
  decorators: [StoreDecorator({})],
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    text:
      // eslint-disable-next-line max-len
      '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n   </script>\n </body>\n</html>',
  },
};

export const Dark: Story = {
  args: {
    text:
      // eslint-disable-next-line max-len
      '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n   </script>\n </body>\n</html>',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
