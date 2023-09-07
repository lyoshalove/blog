import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/decorators';
import { LoginForm } from './LoginForm';

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      login: {
        username: 'Admin',
        password: '123',
      },
    }),
  ],
};

export const WithError: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      login: {
        username: 'Admin',
        password: '123',
        error: 'Just error',
      },
    }),
  ],
};

export const Loading: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      login: {
        isLoading: true,
      },
    }),
  ],
};
