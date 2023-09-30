import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators';
import { Theme } from 'app/providers/ThemeProvider';
import { Skeleton } from './skeleton';

const meta = {
  title: 'shared/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    width: 100,
    height: 100,
  },
};

export const Circle: Story = {
  args: {
    width: 100,
    height: 100,
    border: '50%',
  },
};

export const NormalDark: Story = {
  args: {
    width: 100,
    height: 100,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const CircleDark: Story = {
  args: {
    width: 100,
    height: 100,
    border: '50%',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
