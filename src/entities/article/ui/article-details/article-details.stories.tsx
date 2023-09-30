import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook/decorators';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleDetails } from './article-details';

const meta = {
  title: 'features/ArticleDetails',
  component: ArticleDetails,
  tags: ['autodocs'],
  decorators: [StoreDecorator({
    articleDetails: {

    },
  })],
} satisfies Meta<typeof ArticleDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    articleId: '0',
  },
};

export const Dark: Story = {
  args: {
    articleId: '0',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
