import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleTextBlock } from './article-text-block';

const meta = {
  title: 'features/ArticleTextBlock',
  component: ArticleTextBlock,
  tags: ['autodocs'],
} satisfies Meta<typeof ArticleTextBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
