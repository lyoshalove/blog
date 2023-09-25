import type { Meta, StoryObj } from '@storybook/react';
import imageExample from 'shared/assets/tests/image-for-storybook.png';
import { Avatar } from './avatar';

const meta = {
  title: 'shared/Avatar',
  component: Avatar,
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    avatarUrl: imageExample,
  },
};

export const Small: Story = {
  args: {
    avatarUrl: imageExample,
    size: 50,
  },
};
