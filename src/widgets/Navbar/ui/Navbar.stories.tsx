import type { Meta, StoryObj } from '@storybook/react';

import {
  StoreDecorator,
  ThemeDecorator,
} from 'shared/config/storybook/decorators';
import { Theme } from 'app/providers/ThemeProvider';
import { Navbar } from './Navbar';

const meta = {
  title: 'widgets/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  decorators: [StoreDecorator({})],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const AuthNavbar: Story = {
  args: {},
  decorators: [StoreDecorator({
    user: {},
  })],
};
