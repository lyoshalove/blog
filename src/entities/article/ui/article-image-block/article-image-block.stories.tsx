import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleImageBlock } from './article-image-block';

const meta = {
  title: 'features/ArticleImageBlock',
  component: ArticleImageBlock,
  tags: ['autodocs'],
} satisfies Meta<typeof ArticleImageBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
