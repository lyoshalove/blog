import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleCodeBlock } from './article-code-block';
import { ArticleBlockType } from '../../model/types';

const meta = {
  title: 'features/ArticleCodeBlock',
  component: ArticleCodeBlock,
  tags: ['autodocs'],
} satisfies Meta<typeof ArticleCodeBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    block: {
      type: ArticleBlockType.CODE,
      // eslint-disable-next-line max-len
      code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n   </script>\n </body>\n</html>',
      id: '0',
    },
  },
};

export const Dark: Story = {
  args: {
    block: {
      type: ArticleBlockType.CODE,
      // eslint-disable-next-line max-len
      code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n   </script>\n </body>\n</html>',
      id: '0',
    },
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
