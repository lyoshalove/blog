import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook/decorators';
import { Theme } from 'app/providers/ThemeProvider';
import { Sidebar } from './Sidebar';

const meta = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
  decorators: [StoreDecorator({
    user: {
      authData: {},
    },
  })],
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
    user: {
      authData: {},
    },
  })],
};

export const NoAuth: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
    user: {},
  })],
};
