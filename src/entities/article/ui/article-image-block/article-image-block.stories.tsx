import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleImageBlock } from './article-image-block';
import { ArticleBlockType } from '../../model/types';

const meta = {
  title: 'features/ArticleImageBlock',
  component: ArticleImageBlock,
  tags: ['autodocs'],
} satisfies Meta<typeof ArticleImageBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    block: {
      type: ArticleBlockType.IMAGE,
      // eslint-disable-next-line max-len
      src: 'https://i.ytimg.com/vi/8By5xEXkZQk/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGGUgTyhHMA8=&amp;rs=AOn4CLACJlKGja8-IWEpZpNzpdIXXcx7Tg',
      title: 'SNUS',
      id: '0',
    },
  },
};

export const Dark: Story = {
  args: {
    block: {
      type: ArticleBlockType.IMAGE,
      // eslint-disable-next-line max-len
      src: 'https://i.ytimg.com/vi/8By5xEXkZQk/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGGUgTyhHMA8=&amp;rs=AOn4CLACJlKGja8-IWEpZpNzpdIXXcx7Tg',
      title: 'SNUS',
      id: '0',
    },
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
