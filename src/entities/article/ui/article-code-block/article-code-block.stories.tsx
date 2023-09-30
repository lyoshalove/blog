import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleCodeBlock } from './article-code-block';

const meta = {
  title: 'features/ArticleCodeBlock',
  component: ArticleCodeBlock,
  tags: ['autodocs'],
} satisfies Meta<typeof ArticleCodeBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
