import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators';
import { Theme } from 'app/providers/ThemeProvider';
import { LoginModal } from './LoginModal';

const meta = {
  title: 'features/LoginModal',
  component: LoginModal,
  tags: ['autodocs'],
} satisfies Meta<typeof LoginModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isOpened: false,
  },
};
